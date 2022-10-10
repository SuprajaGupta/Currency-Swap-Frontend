import React from 'react';
import './about.css';


const About = () => {
  return (
    <div className="About"
      style={{
        display: 'flex',
        justifyContent: 'Center',
        alignItems: 'Center',
        height: '100vh'
      
      }}
    >
      {/* <h1>Its all about Currency Swap </h1> <br/> */}
      {/* <img src={Currency} width="80" height="70"></img> */}
      <img src = "https://i0.wp.com/www.shippingandfreightresource.com/wp-content/uploads/2018/12/currencyswap.png?resize=300%2C273&ssl=1"></img> <br/>
      <div class="tag">             
               <h2> This website converts amount from <br/> one currency to other currency. <br/>
        You can choose to display one of the different currencies <br/> and enter the amount in one selected <br/>
        currency to be converted into the other selected currency.</h2>
        </div>
    </div>
  );
};
  
export default About;