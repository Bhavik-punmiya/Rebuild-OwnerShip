import React from 'react'
import './css/certificategenerator.css'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


function Certifcategenerator() {
  return (
    <div className='certificategenerator'> 
      <div className='formpage'>
      <div className='logo'>
        <p>E-Certification</p>
        <img src={require('./img/Frame 123.png')} alt="Logo" />
      </div>
      <div className='formdiv'>
        <h5>Fill Your Details</h5>
        <form onSubmit={''}>
          <div className="row">
            <div className="col">
              <label className="form-label">First Name</label>
              <input
                type="text"
                className="form-control"
                id="firstname"
                name="firstName"
                placeholder="First Name"
                value={''}
                onChange={''}
              />
            </div>
            <div className="col">
              <label className="form-label">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="lastname"
                name="lastName"
                placeholder="Last Name"
                value={''}
                onChange={''}
              />
            </div>
          </div>
          <label className="form-label">Organization Name</label>
          <input
            type="text"
            className="form-control"
            id="organizationname"
            name="organizationName"
            placeholder="Organization Name"
           
          />
          <label className="form-label">Course Name</label>
          <input
            type="text"
            className="form-control"
            id="coursename"
            name="courseName"
            placeholder="Course Name"
       
          />
          <label className="form-label">Issue Date</label><br />
           <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              
            />
          </LocalizationProvider> 
          <div className='submitbtn'>
            <button className="btn btn-primary" type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Certifcategenerator
