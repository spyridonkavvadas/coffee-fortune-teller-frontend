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
      <div class="row align-items-center">
      <div class="col-2"></div>

      <div class="instructions col-8">
        <ul>
            <li>Upload a photo</li>
            <li>Enter Name, birthday, genter, and status</li>
            <li>Press the button "Get Oracle"</li>
        </ul>
      </div>

      <div class="col-2"></div>
      </div>
      </Container>

    </header>
  );
}

export default Header;
