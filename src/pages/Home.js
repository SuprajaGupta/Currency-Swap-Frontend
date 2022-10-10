import React from 'react';
import { Outlet, Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import './home.css';
// import Footer from './Footer';

const Home = () => {
  let navigate=useNavigate();
  // return (
  //   <div 
  //     style={{
  //       display: 'flex',
  //       justifyContent: 'Center',
  //       alignItems: 'Center',
  //       height: '100vh'
  //     }}
  //   >
      
  //     <div></div>
  //     <h2>  Welcome to Currency Swap Home Page <br/> <Link to="/Payment"> Please Pay to Continue </Link> </h2> <br/> <br/>
  //     <h2> Don't have a account? <br/> <Link to="/sign-up"> Click here to register </Link> </h2> <br/>
  //     <h2> Already have a account? <br/> <Link to="/sign-in"> Click here to login </Link> </h2> <br/>
     
  //     {/* <Link to="/Currency">Currency Swap</Link> */}
      
  //   </div>
  // );


  return (

    <div className='home'>

        <center>

        {/* <button class="testing" onClick={()=>{navigate("/Payment")}}>Click here to pay</button> */}

          <button class="testing" onClick={()=>{navigate("/sign-up")}}> Click here to register </button>
          <button class="testing" onClick={()=>{navigate("/sign-in")}}>Click here to login </button>

          </center>

         

        <center>

            <h1>Heyy Welcome to Currency Swap Home Page </h1>

            <img src="https://t3.ftcdn.net/jpg/03/67/35/72/360_F_367357209_BG07SVnnB4HSHSaMiHajfZhrZZAE859A.jpg" alt='welcome' />

        </center>

       

    </div>

);
};



// function Home(){

//     return(

//     <div class="home-wrapper">

//       <form action="" class="form">

//         <h2>Home Page</h2>

//         <input type="submit" value="Login" class="submit-btn" />

//       </form>

//     </div>

//     );

// }

    export default Home;
  
// export default Home;


