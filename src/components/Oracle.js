import React from "react";
import persona3 from "../images/persona3.jpg";


function Oracle({ oracle }) {
  
  return (
    <>
      <container>
      <div class='row align-items-left bg-faded'>
        <div class='col-2'>
        </div>
        <div class='col-8'>

        <img src={persona3} alt={"Coffee Fortune Teller"} width={'129px'}/>

          </div>
          <div class='col-2'></div>
      </div>

      <div class='row align-items-center bg-faded'>
        <div class='col-2'>
        </div>
        {oracle && 
        <div class='col-8 align-text-right'>
          <h4>Here is your Oracle! </h4>
            <div class='text-oracle'>{oracle}</div>
        </div>}
        <div class='col-2'></div>
      </div>
      </container>
    </>
  ); 
}

export default Oracle;
