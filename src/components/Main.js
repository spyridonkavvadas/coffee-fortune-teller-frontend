import React from "react";
import Header from "./Header";
import "./Main.css";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {Container, Col, Card} from 'react-bootstrap';
import { FaUserAlt, FaCalendarDay, FaTransgender } from "react-icons/fa";
import { IoIosHeartHalf } from "react-icons/io";
import persona0 from "../images/persona0.png";



export default function Main({
  images,
  onUpload,
  getOracle,
  isButtonDisabled
}) {

  return (
    <>
      <Header />
      <Container>
       {/* Fortune Teller Persona*/}
      <div class="row align-items-center bg-faded mb-2">
      <div class='col-3 d-flex justify-content-start'><img class='img-fluid' src={persona0} alt={"Coffee Fortune Teller"} width={'140px'}/></div>
      {/* Instructions */}
      <div class='col-6 p-3'id='inst-text'>
          <h6>Insert coffee cup photos here</h6>
          <h6>Enter name, birthday, gender, and status</h6>
          <h6>Press the button below and get the Oracle</h6>
      </div>
      <div class='col-3'></div>
      </div>

       {/* Cards for inserting Coffee Cup Photos */}
        <div class="row align-items-center bg-faded">
          <div class="col-4">
            <Card>
            <Card.Img variant="top"  src={images[0]} alt="" width={'150px'} height={'150px'}/>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Form.Group> 
                  <input type="file" onChange={(e) => {onUpload(e.target.files[0], 1)}}/>
                
                </Form.Group>
              </Card.Body>
            </Card>
          </div>

          <div class="col-4">
            <Card>
              <Card.Img variant="top"  src={images[1]} alt="" width={'150px'} height={'150px'}/>
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Form.Group>
                    <Form.File type="file" onChange={(e) => {onUpload(e.target.files[0], 2)}} />
                  </Form.Group>
              </Card.Body>
            </Card>
          </div>
            
          <div class="col-4">
          <Card>
              <Card.Img variant="top" src={images[2]} alt="" width={'150px'} height={'150px'}/>
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Form.Group>
                    <Form.File id="uploadPhoto" type="file" onChange={(e) => {onUpload(e.target.files[0], 3)}} />
                  </Form.Group>
              </Card.Body>
            </Card>
          </div>
        </div>

        <Form>
      {/*Enter Name*/}
        <div class="row">
          <div class="col-2"><h5 class='mb-0'>Name</h5></div>
          <div class="col-2"><FaUserAlt size='1.2em'/></div>
          <div class="col-8">
            <Form.Group controlId="formName">
              <Form.Label></Form.Label>
                <Form.Control type="text" placeholder="Enter your Name here" />
                <Form.Text className="text-muted">
              </Form.Text>
            </Form.Group>
          </div>  
        </div>

      {/*Enter Birthday*/}
      <div class="row">
        <div class="col-2"><h5 class='mb-0'>Birthday</h5></div>
        <div class="col-2"><FaCalendarDay size='1.2em'/></div>
          <div class="col-8">
            <Form.Group controlId="dob">
              <Form.Label></Form.Label>
              <Form.Control type="date" name="dob" placeholder="Date of Birth" />
            </Form.Group>
          </div>  
      </div>

       {/*Enter Gender*/}
       <div class="row">
        <div class="col-2"><h5 class='mb-0'>Gender</h5></div>
        <div class="col-2"><FaTransgender size='1.5em'/></div>
          <div class="col-8">
          <Form.Group as={Col} controlId="formGridState">
              <Form.Label></Form.Label>
              <Form.Control as="select" defaultValue="Select Gender">
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </Form.Control>
            </Form.Group>
          </div>  
      </div>

       {/*Enter Status*/}
       <div class="row mb-4">
        <div class="col-2"><h5 class='mb-0'>Status</h5></div>
        <div class="col-2"><IoIosHeartHalf size='1.5em'/></div>
          <div class="col-8">
          <Form.Group as={Col} controlId="formGridState">
              <Form.Label></Form.Label>
              <Form.Control as="select" defaultValue="Select Status">
                <option>Married</option>
                <option>Engaged</option>
                <option>Divorced</option>
                <option>Single</option>
              </Form.Control>
            </Form.Group>
          </div>  
      </div>

      {/*Empty Row*/}
      <div class="row"></div>

      {/*Button*/}
      <div class="row">
      <div class="col-12">
        <Button disabled={isButtonDisabled} variant="primary" size="lg" onClick={getOracle} onKeyPress={getOracle}>
          Get Oracle
        </Button>
        </div>
      </div>
       
    </Form>

  </Container>

  </>
  )
}
