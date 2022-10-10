import React from 'react';
import logo from './logo.jpg';
import { Navigate } from "react-router-dom";
import {NavLink as ReactLink, useNavigate} from "react-router-dom";


import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
  
const Navbar = () => {
  const navigate=useNavigate();
  const getCookie = (cname) => {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

const signoutHandler = () => {
    console.log("logout")
    console.log(window.location);
    document.cookie = "accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    window.location.href = '/about';
}

const user= JSON.parse(localStorage.getItem('user-info'))
  
  console.warn(user)
  function logout()

{

  localStorage.clear();

  navigate('/')

}

  return (
    <>
    {getCookie("accessToken") &&
      <Nav>
        <Bars />
        <NavLink to='/' activeStyle>
        <img src={logo} width="80" height="70"></img>
        </NavLink>
        <NavMenu>
        {/* { getCookie("accessToken") &&   <div> */}
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/contact' activeStyle>
            Contact
          </NavLink>
          <NavLink to='/Payment' activeStyle>
            Payment
          </NavLink>
          <NavLink to='/Converter' activeStyle>
            Currency Swap
          </NavLink>
          { <NavLink to='/' onClick={signoutHandler} activeStyle>
            Log out
          </NavLink> }
          </NavMenu>
        
      </Nav>
        }
{!(getCookie("accessToken")) &&
<Nav>
        <Bars />
        <NavLink to='/' activeStyle>
        <img src={logo} width="80" height="70"></img>
        </NavLink>

        <NavMenu>
          {/* </div>
} */}

          {/* { getCookie("accessToken") &&   <div> */}
        
        {/* <NavLink to='/about' OnClick={signoutHandler} activeStyle> 
          Sign Out
         
        </NavLink> */}

        {/* <a href='/about' OnClick={signoutHandler} > Sign Out </a> */}
        
        {/* </div>
         } */}

          {/* {!(getCookie("accessToken") )&&   
          <div> */}

          {/* <NavLink to='/sign-up' activeStyle>
            Sign Up
          </NavLink> 
        
          <NavLink to='/sign-in' activeStyle>
            Sign In
          </NavLink> */}


          {/* </div>
           } */}
          
          {/* <NavLink to='/currency' activeStyle>
            Currency Swap
          </NavLink> */}
          <NavLink to='/sign-up' activeStyle>
            Sign Up
          </NavLink>
          <NavLink to='/sign-in' activeStyle>
            Sign In
          </NavLink>
          {/* {!(getCookie("accessToken") )&&   
          <div> */}

          </NavMenu>
       
       </Nav>
 }
     </>
   );
   
 };
          {/* <NavLink to='/' activeStyle>
            Logout
          </NavLink> */}
          {/* <a href='/about' OnClick={signoutHandler} > Sign Out </a>
          </div>
} */}
        
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        // </NavMenu>
        {/* <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn> */}
//       </Nav>
// }
//     </>
//   );
// };
  
export default Navbar;




// import applogo from './applogo.png'
// import logo from './logo.jpg'
// import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
// function Navbar(){

//     const username = sessionStorage.getItem("username");

//     const getCookie = (cname) => {
//         let name = cname + "=";
//         let decodedCookie = decodeURIComponent(document.cookie);
//         let ca = decodedCookie.split(';');
//         for (let i = 0; i < ca.length; i++) {
//             let c = ca[i];
//             while (c.charAt(0) == ' ') {
//                 c = c.substring(1);
//             }
//             if (c.indexOf(name) == 0) {
//                 return c.substring(name.length, c.length);
//             }
//         }
//         return "";
//     }


//     const signoutHandler = () => {
//         console.log("logout")
//         console.log(window.location);
//         document.cookie = "accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
//         window.location.href = '/';
//     }
//     return (
//         <div>
//             {getCookie("accessToken") &&
//             <nav class="navbar background">
//                 <ul class="nav-list">
//                     <div class="logo">
//                         {/* <img src={logo} /> */}
//                     </div>
//                     <a className='h1-title' href="home"><h1>FOODIVERSE</h1></a>
//                     <li><a href="home">Home</a></li>
//                     <li><a href="about-us">About Us</a></li>
//                     <li><a href="contact-us">Contact Us</a></li>
//                    <li> <label>Welcome {username} ! </label></li>
//                 </ul>
//                 {/* <label>Welcome {username}</label> */}
//                 <a href="home"><button class="btn btn-sm">Cart </button></a>
//                 <a href="home"><button class="btn btn-sm" onClick={signoutHandler}>Logout</button></a>  
//             </nav>
// }
// {!(getCookie("accessToken")) &&
//             <nav class="navbar background">
//                 <ul class="nav-list">
//                     <div class="logo">
//                         {/* <img src={logo} /> */}
//                     </div>
//                     <a className='h1-title' href="home"><h1>FOODIVERSE</h1></a>
//                     <li><a href="home">Home</a></li>
//                     <li><a href="about-us">About Us</a></li>
//                     <li><a href="contact-us">Contact Us</a></li>
//                 </ul>
                
//                 <a href="register"><button class="btn btn-sm">Register</button></a>
//                 <a href="login"><button class="btn btn-sm">Login</button></a>
//             </nav>
// }
           
//         </div>
//     )


// }
// export default Navbar;


