import React from 'react'
import { Link } from "react-router-dom";
import './css/home.css'
import { useUserAuth } from './context/userAuthContext';





function Home() {
  const {user,logout} = useUserAuth();
  console.log(user);

  const handlelogout=async ()=>{
     await logout();
     await localStorage.removeItem('auth')
  }
  return (
    <div className='home'>
    <main className='main'>

<head>
  <link rel="preconnect" href="https://fonts.googleapis.com"/>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
  <link href="https://fonts.googleapis.com/css2?family=Outfit&display=swap" rel="stylesheet"/>
</head>
<section>
  <div className='button-container'>
    <div className='right-regi-btns'>
         <a href="/scheme">
          <div className='schemes' > View Schemes </div>
        </a> 
        <a href="/myfiles">
          <div className='schemes' > My Files </div>
        </a> 
    </div>
      <div className='left-regi-btns'>
     {!user?( <><a href="/signup">
        <div className='signUp' > Sign Up </div>
      </a>
      <a href="/login">
        <div className='logIn'> Log In </div>
      </a></>):( <a href="/login">
        <div className='logIn' onClick={handlelogout}> Log Out </div>
      </a>)}
      </div>
      <div className='clear'></div>
  </div>    
    


</section>
<section className='hero-section'>
  <div className='hero-container'>
    <div className='title'>
      <h1>E-Vault</h1> 
    </div>
    <div className='subtitle'>
      <h2>Get Your Files Secured</h2>
    </div>
    <div className='subtext'>
      <p>Our technology performing fast blockchain (120K TPS) and it has guaranteed AI-based data security. Proof of Stake, its consensus algorithm enables unlimited speeds.</p>
    </div>
  </div>

 
</section>
<section className='bottom'>
  <div className='looperImg'>
    <div className="opacity_div"></div>

          
  </div>
</section>

</main>
      
    </div>
  )
}

export default Home
