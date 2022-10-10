import React from 'react';
import './contact.css';
  
const Contact = () => {
  return (
    <div className="Contact"
      style={{
        display: 'flex',
        justifyContent: 'Center',
        alignItems: 'Center',
        height: '100vh'
      }}
    >
      <img src = "https://st.depositphotos.com/1265075/2916/i/600/depositphotos_29165825-stock-photo-website-contact-us-icons-on.jpg"></img>
      <h2> For any queries please contact following:  <br/> <br/> <br/> 
       
        Email   :  supraja@gmail.com <br/> 
        Address :  Aboss Enclave, <br/> 
                   Jains Colony, Sreebagh Colony, <br/>
                   Hyderabad, Telangana 500074, <br/>
                   India <br/> 
        Call now : 092263 65683  
      </h2>
      {/* https://media.istockphoto.com/photos/closeup-image-of-male-hands-using-smartphone-with-icon-telephone-picture-id1168945108?k=20&m=1168945108&s=612x612&w=0&h=MqKJyjMB1NJ33aRB9kjhxqP_GbPmEVB11saJi9sCuwM= */}
      
    </div>
  );
};
  
export default Contact;