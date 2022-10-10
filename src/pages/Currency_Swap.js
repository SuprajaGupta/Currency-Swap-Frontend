import { useEffect, useState } from 'react';
import Axios from 'axios';
import Dropdown from 'react-dropdown';
import { HiSwitchHorizontal } from 'react-icons/hi';
import 'react-dropdown/style.css';
import { Link } from 'react-router-dom';
import './swap.css';
  
function Currency() {
  
  // Initializing all the state variables 
  const [info, setInfo] = useState([]);
  const [input, setInput] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [options, setOptions] = useState([]);
  const [output, setOutput] = useState(0);
  
  // Calling the api whenever the dependency changes
  useEffect(() => {
    Axios.get(
`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}.json`)
   .then((res) => {
      setInfo(res.data[from]);
    })
  }, [from]);
  
  // Calling the convert function whenever
  // a user switches the currency
  useEffect(() => {
    setOptions(Object.keys(info));
    convert();
  }, [info])
    
  // Function to convert the currency
  function convert() {
    var rate = info[to];
    setOutput(input * rate);
  }
  
  // Function to switch between two currency
  function flip() {
    var temp = from;
    setFrom(to);
    setTo(temp);
  }
  
  return (
    <div className="Currency">
      <div className="SwapHeading">
        <h1 class="tag1">Hey Welcome to Currency Swap!</h1>
      </div>
      <div className="SwapContainer">
        <div className="left">
          <h3 class="tag3">Amount</h3>
          <input class="input1" type="text" 
             placeholder="Enter the amount" 
             onChange={(e) => setInput(e.target.value)} />
        </div>
        <div className="SwapMiddle">
          <h3 class="tag3">From</h3>
          <Dropdown options={options} 
                    onChange={(e) => { setFrom(e.value) }}
          value={from} placeholder="From" />
        </div>
        <div className="SwapSwitch">
          <HiSwitchHorizontal size="30px" 
                        onClick={() => { flip()}}/>
        </div>
        <div className="SwapRight">
          <h3 class="tag3">To</h3>
          <Dropdown options={options} 
                    onChange={(e) => {setTo(e.value)}} 
          value={to} placeholder="To" />
        </div>
      </div>
      <div className="SwapResult">
        <button class="button1" onClick={()=>{convert()}}>Convert  <br/></button>  <br/>
        <h2 class="tag2">Converted Amount: </h2>  <br/>
        <p class="p1">{input+" "+from+" = "+output.toFixed(2) + " " + to}</p>
  
      </div> <br/>
      <h1 class="tag1">Thanks you & visit again :) </h1>  <br/>
      {/* <h2 class="tag1">Want to know more about us? please visit here. </h2> */}
      <Link to="/Contact">Want to know more about us? please visit here.</Link>
      {/* <Link to="/Payment">Please Donate Here</Link> */}
    </div>
  );
}
  
export default Currency;