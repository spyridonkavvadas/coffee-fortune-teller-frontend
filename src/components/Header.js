import React from "react";
import { Container } from "react-bootstrap";
import banner from "../images/banner2.jpg";
import "./Header.css";


function Header() {
  return (
    <header>
      <Container>
      <div className="header-inner">
         
          <img class='img-fluid' src={banner} alt={"banner"}/>
      </div>
      <div>Upload a photo</div>
      <div>Enter Name, birthday, genter, and status</div>
      <div>Press the button "Get Oracle"</div>
      </Container>
    </header>
  );
}

export default Header;
