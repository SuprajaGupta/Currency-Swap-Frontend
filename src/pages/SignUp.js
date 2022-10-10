import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import './signup.css';

  
const SignUp = () => {
    const navigate = useNavigate();
    // const [errorMessages, setErrorMessages] = useState({});
    const[username,setUserName] = useState("")
    const[email,setEmail] = useState("");
    const[phone,setPhone] = useState("");
    const [password,setPassword] = useState("");
    const [confirmpassword,setConfirmPassword] = useState("");
    const [formErrors, setFormErrors] = useState({});


    const Validate = (values) => {
        const error = {username: String,
        email: String,
      password: String};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.username) {
          error.username = "Username is required!";
        
        }
        if (!values.email) {
          error.email = "Email is required!";
        } else if (!regex.test(email)) {
          error.email = "This is not a valid email format!";
        }
        if (!values.password) {
          error.password = "Password is required";
        } else if (values.password.length < 4) {
          error.password = "Password must be more than 4 characters";
        } else if (values.password.length > 10) {
          error.password = "Password cannot exceed more than 10 characters";
        }
        return error;
      };


   
    const onInputChangeUserName = event => {
        setUserName(event.target.value);
      };

    const onInputChangePhone = event => {
        setPhone(event.target.value);
        };
    const onInputChangeEmail = event => {
        setEmail(event.target.value);
      };
    const onInputChangePassword = event => {
        
    setPassword(event.target.value);
    };
    const onInputChangeConfirmPassword = event => {
        setConfirmPassword(event.target.value);
        };


    const data = {"username":username,"email":email,"phone":phone,"password":password,"confirmpassword":confirmpassword};
    const FormHandle = e => {
        e.preventDefault();
        if(!data.username || !data.password || !data.email){
            setFormErrors(Validate(data));}
            else{
        addDataToServer(data)}
    }
    console.log(data);
    const addDataToServer = (cred) => {
        console.log(cred);
        axios.post("http://localhost:8086/api/auth/signup", cred).then(
            (response) => {
                
                console.log(response);
                alert("User is added successfully");
                if (response.status==200) {
                    console.log("navigating");
                    navigate('/sign-in');
                }
            }, (error) => {
                console.log(error);
                alert("Please try again");
            }
        );
    }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'Center',
        alignItems: 'Center',
        height: '100vh'
      }}
    >
      
      <div className='signup'>
            <form onSubmit={e => FormHandle(e)} class="check-credentials-formsp">
                
            <div id="usernamesp" class="username"> <br/>
                <p id="hint"><strong>Enter username</strong></p>
                    <input type="text" class="form-control" name="username"  placeholder="Enter username" value={username} onChange={(e) => onInputChangeUserName(e)}  required/>
                </div>
                <p>{formErrors.username}</p>

                <div id="phonesp" class="phone">
                <p id="hint"><strong>Enter Number</strong></p>
                    <input type="number" class="form-control" name="phone"  placeholder="Enter phone" value={phone} onChange={(e) => onInputChangePhone(e)}  required />
                </div>
                <p>{formErrors.phone}</p>

                <div id="emailsp" class="email">
                <p id="hint"><strong>Enter email</strong></p>
                    <input type="text" class="form-control" name="email"  placeholder="Enter email" value={email} onChange={(e) => onInputChangeEmail(e)}  required/>
                </div>
                <div id="passwordsp" class="password">
                <p id="hint"><strong>Enter password</strong></p>
                    <input type="password" class="form-control" name="password"  placeholder="Enter password" value={password} onChange={(e) => onInputChangePassword(e)}  required/>
                </div>
                <div id="confirmpasswordsp" class="confirmpassword">
                <p id="hint"><strong>Re-Enter password</strong></p>
                    <input type="password" class="form-control" name="confirmpassword"  placeholder="Re Enter password" value={confirmpassword} onChange={(e) => onInputChangeConfirmPassword(e)}  required/>
                </div><br></br>
                <div className="btnsignup">
                    <button type="submit" class="btn btn-outline-secondary my-2 text-center mr-2">Sign Up</button>
                </div>
            
                <Link to="/sign-in">Already have any account? </Link>
            </form>
        </div>
    </div>
    
  );
};

export default SignUp;
