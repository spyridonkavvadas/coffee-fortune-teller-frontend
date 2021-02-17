import React from "react";
import persona3 from "../images/persona3.jpg";


import { FaFacebook, FaPinterestSquare, FaTwitter, FaEnvelope } from "react-icons/fa";



function Oracle({ oracle }) {
  
  return (
    <>
      <container>
      <div class='row align-items-left bg-faded mb-2'>
        <div class='col-2'>
        </div>
        <div class='col-8'>

        <img src={persona3} alt={"Coffee Fortune Teller"} width={'129px'}/>

          </div>
          <div class='col-2'></div>
      </div>

      <div class='row align-items-center bg-faded mb-5'>
        <div class='col-2'>
        </div>
        {oracle && 
        <div class='col-8 align-text-right'>
          <h4>Here is your Oracle! </h4>
          <div class='text-oracle p-5 mt-2' style={{backgroundColor: "whitesmoke"}}>
            {oracle.map((item) => <p>{item}</p>)}
            
            <div class='social-media d-flex justify-content-center'>
            <div data-href="https://developers.facebook.com/docs/plugins/" data-layout="button" data-size="small">
            <a class="resp-sharing-button__link" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse" target="_blank" rel="noreferrer" aria-label="Share on Facebook">
            <FaFacebook size='1.3em'/>
            </a>
            </div>

            <a href="https://www.pinterest.com/pin/create/button/" data-pin-do="buttonBookmark"><FaPinterestSquare size='1.3em' /></a>
            <a href="https://twitter.com/intent/tweet/?text=Super%20fast%20and%20easy%20Social%20Media%20Sharing%20Buttons.%20No%20JavaScript.%20No%20tracking.&amp;url=http%3A%2F%2Fsharingbuttons.io" target="_blank" rel="noreferrer" aria-label="Share on Twitter"> <FaTwitter size='1.3em'/></a>

            <a href="https://mail.google.com/mail/u/0/#search/rfc822msgid%3Aabcdefg%40example.com" target="_self" rel="noopener" aria-label="Share by E-Mail"><FaEnvelope size='1.3em' /></a>
            
           

            </div>
          </div>
        </div>}
        <div class='col-2'></div>
      </div>
      </container>
    </>
  ); 
}

export default Oracle;
