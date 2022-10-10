import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Payment from './pages/Payment';
import Currency_Swap from './pages/Currency_Swap';
import Success from './pages/Success';
import Footer from './pages/Footer';
import Converter from './pages/Converter';
import ForgotPassword from './pages/ForgotPassword';


  
function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
    <Router>
      <Navbar />
      <Routes>
        <Route index element={<Home/>} />
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>} />
        <Route path='/sign-in' element={<SignIn/>}/>
        <Route path='/sign-up' element={<SignUp/>} />
        <Route path='/currency' element={<Currency_Swap/>} />
        <Route path='/Payment' element={<Payment/>} />
        <Route path='/Success' element={<Success/>} />
        <Route path='/Converter' element={<Converter/>} />
        <Route path='/ForgotPassword' element={<ForgotPassword/>} />
    
      </Routes>
      {/* <Footer/> */}
    </Router>
    </div>
       <Footer />
    </div>
    
  );
}
  
export default App;
