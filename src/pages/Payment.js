import { useEffect, useState } from 'react';
import Axios from 'axios';
import Dropdown from 'react-dropdown';
import { HiSwitchHorizontal } from 'react-icons/hi';
import 'react-dropdown/style.css';
import { Link } from 'react-router-dom';
import './payment.css';
import {Routes, Route, useNavigate} from 'react-router-dom';

function Payment() {
    const navigate = useNavigate();
    const navigateToCurrency = () => {
       
      alert("OTP is sent to your mail")
      };
      const navigateToSuccess = () => {
      
        // 👇️ navigate to /contacts
        navigate('/Success');
      };

      return (
  
        <div className="rowPayment">
          <div className="col-75">
            <div className="containerPayment">
              {/* <form action="/Currency"> */}
              <form>
                <div className="rowPayment">
                  <div className="col-50">
                    <h3>Billing Address</h3>
                    <label className="labelPayment" htmlFor="fname"><i className="fa fa-user" /> Full Name</label>  
                    <input className="inputPayment" type="text" id="fname" name="firstname" placeholder="Supraja" required/> <br/>
                    {/* <label className="labelPayment" htmlFor="email"><i className="fa fa-envelope" /> Email</label> 
                    <input className="inputPayment" type="text" id="email" name="email" placeholder="john@example.com" />  */}
                    <label className="labelPayment" htmlFor="adr"><i className="fa fa-address-card-o" /> Address</label> 
                    <input className="inputPayment" type="text" id="adr" name="address" placeholder="542 W. 15th Street" required/> <br/>
                    <label className="labelPayment" htmlFor="city"><i className="fa fa-institution" /> City</label>
                    <input className="inputPayment" type="text" id="city" name="city" placeholder="New York" required/> <br/>
                    {/* <label className="labelPayment" htmlFor="email"><i className="fa fa-envelope" /> Email</label> 
                    <input className="inputPayment" type="text" id="email" name="email" placeholder="supraja@example.com" />  */}
                    <div className="rowPayment">
                      <div className="col-50">
                        <label className="labelPayment" htmlFor="state">State</label>
                        <input className="inputPayment" type="text" id="state" name="state" placeholder="NY" />
                      </div>
                      <div className="col-50">
                        <label className="labelPayment" htmlFor="zip">Email</label>
                        <input  className="inputPayment" type="text" id="zip" name="zip" placeholder="supraja@gmail.com"  />
                      </div>
                    </div>
                  </div>
                  <div className="col-50">
                    <h3>Payment</h3>
                    <label className="labelPayment" htmlFor="fname">All types of cards are accepted </label>
                    <div className="icon-container">
                      <i className="fa fa-cc-visa" style={{color: 'navy'}} />
                      <i className="fa fa-cc-amex" style={{color: 'blue'}} />
                      <i className="fa fa-cc-mastercard" style={{color: 'red'}} />
                      <i className="fa fa-cc-discover" style={{color: 'orange'}} />
                    </div>
                    <label className="labelPayment" htmlFor="cname">Name on Card</label> 
                    <input className="inputPayment" type="text" id="cname" name="cardname" placeholder="Supraja" /> <br/>
                    <label className="labelPayment" htmlFor="ccnum"> Card number</label>
                    <input className="inputPayment" type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444" /> <br/>
                    <label className="labelPayment" htmlFor="expmonth">Exp Month</label>
                    <input className="inputPayment" type="text" id="expmonth" name="expmonth" placeholder="September" /> <br/>
                    <div className="rowPayment">
                      <div className="col-50">
                        <label className="labelPayment" htmlFor="expyear">Exp Year</label>
                        <input className="inputPayment" type="text" id="expyear" name="expyear" placeholder={2018} />
       
                      </div>
                      <div className="col-50">
                        <label className="labelPayment"  htmlFor="cvv">CVV </label>
                        <input className="inputPayment" type="text" id="cvv" name="cvv" placeholder={352} />
                      </div>
                    </div>
                  </div>
                </div>
                <label className="labelPayment">
                  <input className="inputPayment" type="checkbox" defaultChecked="checked" name="sameadr" /> Shipping address same as billing
                </label>
                <div>
                <input type="submit" defaultValue="Submit" className="btnPayment" onClick={navigateToCurrency}/>
            
                </div>
                </form>
            </div>
          </div>
          <div className="col-25">
            <div className="containerPayment">
              <h4> Please pay for using Currency Swap 
                
              </h4>
              <p> One time use <span className="price">₹15</span></p>
    
              <hr />
              <p>Total Payment <span className="price" style={{color: 'black'}}><b>₹15</b></span></p>
            </div>
            <input type="password" className="InputPayment"   placeholder="Enter OTP"  required/>
            <input type="submit" defaultValue="Submit" className="btnPayment" onClick={navigateToSuccess}/>
          </div>
        </div>
      );
    }

    export default Payment;