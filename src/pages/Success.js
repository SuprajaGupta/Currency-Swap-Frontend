import React from 'react';
import { Outlet, Link } from "react-router-dom";
import './success.css';
// import './home.css';
// import Footer from './Footer';

const Success = () => {
  return (
    <div className="Success"
      style={{
        display: 'flex',
        justifyContent: 'Center',
        alignItems: 'Center',
        height: '100vh'
      }}
    >
      
      
      {/* <h1 className="tagg" >Your Payment is successfull. <br/> <br/>  <br/> </h1>
      <h2> Now you can use our Currency Swap website which has more than 10 currencies which you can choose. <br/> <br/> <Link to="/Currency"> Click here to use our Currency Swap </Link></h2>
      
      */}
      <center>

      {/* <h1 className="tagg" >Your Payment is successfull. <br/> <br/>  <br/> </h1> */}
      <h2> Now you can use our Currency Swap Premium Version <br/> <br/> <Link to="/Currency"> Click here to use our Currency Swap Premium </Link></h2>
<img src="https://egsgroup.files.wordpress.com/2017/02/payment-successful.png" alt='welcome' />

</center>
      
    </div>
  );
};

export default Success;