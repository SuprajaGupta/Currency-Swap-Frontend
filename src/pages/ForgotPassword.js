import React from 'react';
import { Outlet, Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import './forgot.css';
// import Footer from './Footer';

const ForgotPassword = () => {
  let navigate=useNavigate();

  return (

    <div className='forgot'>

        {/* <center>

        <button class="testing" onClick={()=>{navigate("/Payment")}}>Click here to pay</button>

          <button class="testing" onClick={()=>{navigate("/sign-up")}}> Click here to register </button>
          <button class="testing" onClick={()=>{navigate("/sign-in")}}>Click here to login </button>

          </center>*/}

         

        <center>

            <h1>Please reach out to Admin through email <br/>  <br/> supraja@gmail.com  </h1>  <br/> <br/> <br/>
            <button class="test" onClick={()=>{navigate("/Contact")}}> Click here for admin details </button> <br/> <br/> <br/> <br/> <br/>  <br/>

            {/* <img src="https://t3.ftcdn.net/jpg/03/67/35/72/360_F_367357209_BG07SVnnB4HSHSaMiHajfZhrZZAE859A.jpg" alt='welcome' /> */}

        </center>

       

    </div>

);
};


    export default ForgotPassword;
  



