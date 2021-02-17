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
      </Container>
    </header>
  );
}

export default Header;
