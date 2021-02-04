import React  from "react";

import Header from "./Header";
import axios from "axios";

function Oracle() {
  // Get Oracles as Data with Axios
 const getOracle = () => { 
   axios.get("http://localhost:5000/oracles").then(response => {
    console.log(response.data)
   
 })
 };
  


  return (
    <>
      <Header />
        <div>This is the oracle page
          <button onClick={getOracle()}>Get Oracle</button>
        </div>

           
        
    </>
  );
}

export default Oracle;
