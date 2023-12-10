import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './css/upload.css';
import sideimg from './img/Scene_BluePurpleGold_Link.png';
import { useUserAuth } from './context/userAuthContext';
import TextField from '@mui/material/TextField';
import axios from 'axios';

const JWT="Your JWT Token"
function Upload() {
 const { logout } = useUserAuth();
 const navigate = useNavigate();
 const [file, setFile] = useState(null);
 const [formName, setFormName] = useState('');
 const [uploading, setUploading] = useState(false);

 const handlelogout = async () => {
 await logout();
 await localStorage.removeItem('auth');
 };

 const handleFileChange = (e) => {
 const selectedFile = e.target.files[0];
 setFile(selectedFile);
 };

 const handleFormNameChange = (e) => {
 setFormName(e.target.value);
 };

 const handleUpload = async (event) => {
  event.preventDefault();

  if (file) {
    setUploading(true);

    const formData = new FormData();
    formData.append('file', file);

    // Construct pinataMetadata object with a 'name' field
    const pinataMetadata = JSON.stringify({
      name: formName, // Assuming formName is the name you want to assign
    });
    formData.append('pinataMetadata', pinataMetadata);

    // Other options like cidVersion can be added similarly

    try {
      const res = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", formData, {
        headers: {
          'Authorization': `Bearer ${JWT}`
        }
      });

      const data = await res.data;
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setUploading(false);
    }
  }
};

 return (
 <div className="upload">
   <head>
     <title>File Uploader</title>
     <meta name="description" content="file uploader"></meta>
   </head>
   <main>
     <div className="uploadmenu">
       {/* ... Your existing code for menu links */}
     </div>

     <div className="mainsection">
       <div className="sideimg">
         <img src={sideimg} alt="side image" />
       </div>
       <div className="uploadsection">
         <h1 className="titles">Upload Your Files</h1>
         <div className="container">
           <form onSubmit={handleUpload}>
             <TextField
              id="outlined-basic"
              label="Form Name"
              variant="outlined"
              value={formName}
              onChange={handleFormNameChange}
             />
             <br />
             <input type="file" onChange={handleFileChange} />
             <br />
             <button className="button-29" type="submit">
              {uploading ? 'Submitting' : 'Submit'}
             </button>
             <button
              className="button-29"
              onClick={(e) => navigate('/myfiles')}
             >
              View Documents
             </button>
           </form>
         </div>
       </div>
     </div>
   </main>
 </div>
 );
}

export default Upload;
