import React from "react";
import { Container } from "react-bootstrap";
import banner from "../images/banner1.jpg";
import "./Header.css";


function Header() {
  return (
    <header>
      <Container>
      <div className="header-inner">
         
          <img class='img-fluid' src={banner} alt={"banner"}/>
      </div>
      <div class="row justify-content-center">
      

      <div class="instructions col-12 d-flex justify-content-center">
        
        <ul>
            <li>Upload a photo</li>
            <li>Enter Name, Birthday, Genter, and Status</li>
            <li>Press the button "Get Oracle"</li>
        </ul>
        
      </div>

     
      </div>
      </Container>

    </header>
  );
}

export default Header;
