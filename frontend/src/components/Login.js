import React from 'react';
import './css/login.css';
import { Alert } from 'react-bootstrap';
import {GoogleButton} from 'react-google-button';
import { useNavigate } from 'react-router-dom';
import { useUserAuth } from './context/userAuthContext';
import { useState } from 'react';

function Login() {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState('');
  const [error,setError]=useState('');
  const {login,googlesignin} = useUserAuth();
  const navigate = useNavigate();
  const handlesubmit = async(e)=>{
    e.preventDefault();
    try{
    const res = await login(email,password);
     console.log('user successfully Logined');
     setError('');
     localStorage.setItem('auth',JSON.stringify(res.data))
     navigate('/');
     
    }catch(err){
      setError(err.message);
    }
  }
  const handlegooglesignin = async(e)=>{
    e.preventDefault();
    try{
     const res= await googlesignin();
     console.log('user successfully created');
     await localStorage.setItem('auth',JSON.stringify(res.data))
     setError('');
     navigate('/');
    }catch(err){
      setError(err.message);
    }
  }


  return (
    <div className='main'>
     <div className='maincontainer'>
      <div class="card">
      <div class="card-body">
        <h5 class="card-title">Login</h5>
        {error && <Alert variant='danger'>{error}</Alert>}
        <div class="form-floating mb-3">
        <input type="email" class="form-control" id="loginemailinput" placeholder="Email address" onChange={(e)=>setEmail(e.target.value)}/>
        <label for="loginemailinput">Email address</label>
      </div>
       <div class="form-floating">
       <input type="password" class="form-control" id="loginpassword" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
       <label for="loginpassword">Password</label>
       </div>
       <button type="submit" class="btn btn-primary" onClick={handlesubmit}>Login</button>
       <h5 class="card-title">OR</h5>
       <GoogleButton style={{width:"367px"}} onClick={handlegooglesignin}/>
      </div>
    </div>
    </div>
    <div className='footercontainer'>
    <div class="card">
      <div class="card-body">
        <p class="card-title">If you don't have account?, then <a href='/signup'>Sign Up</a></p>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Login
