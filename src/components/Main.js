import React from "react";
import Header from "./Header";
import "./Main.css";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {Container, Col, Card} from 'react-bootstrap';
import { FaUserAlt, FaCalendarDay, FaTransgender } from "react-icons/fa";
import { IoIosHeartHalf } from "react-icons/io";




export default function Main({
  images,
  onUpload,
  getOracle,
  isButtonDisabled,
  onChangeInput
}) {

  return (
    <>
      <Header />
      <Container>
       
       {/* Cards for inserting Coffee Cup Photos */}
        <div class="row align-items-center bg-faded mt-2 container-fluid">
         
            <div class="uploadphoto col-12 d-flex justify-content-center">
            <Card>
            <Card.Img variant="top"  src={images[0]} alt="" width={'150px'} height={'150px'}/>
              <Card.Body>
                <Form.Group>
                  <label class="file-upload">
                  <input type="file" onChange={(e) => {onUpload(e.target.files[0], 1)}}/>
                  Upload Photo
                  </label> 
                </Form.Group>
              </Card.Body>
            </Card>
            </div>
        
        </div>

        <Form>
      {/*Enter Name*/}
        <div class="row">
        <div class="col-1 align-items-right"><FaUserAlt size='1.2em'/></div>
          <div class="col-3"><h5 class='mb-0'>Name</h5></div>

          <div class="col-8">
            <Form.Group controlId="formName">
              <Form.Label></Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your Name here"
                  name="name"
                  onChange={onChangeInput}
                />
                <Form.Text className="text-muted">
              </Form.Text>
            </Form.Group>
          </div>  
        </div>

      {/*Enter Birthday*/}
      <div class="row">
        <div class="col-1"><FaCalendarDay size='1.2em'/></div>
        <div class="col-3"><h5 class='mb-0'>Birthday</h5></div>
        
          <div class="col-8">
            <Form.Group controlId="dob">
              <Form.Label></Form.Label>
              <Form.Control
                type="date"
                name="birthday"
                onChange={onChangeInput}
                placeholder="Date of Birth" />
            </Form.Group>
          </div>  
      </div>

       {/*Enter Gender*/}
       <div class="row">
        
        <div class="col-1"><FaTransgender size='1.5em'/></div>
        <div class="col-3"><h5 class='mb-0'>Gender</h5></div>
          <div class="col-8">
          <Form.Group as={Col} controlId="formGridState">
              <Form.Label></Form.Label>
              <Form.Control
                as="select"
                defaultValue="Select Gender"
                name="gender"
                onChange={onChangeInput}
              >
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </Form.Control>
            </Form.Group>
          </div>  
      </div>

       {/*Enter Status*/}
       <div class="row mb-4">

        <div class="col-1"><IoIosHeartHalf size='1.5em'/></div>
        <div class="col-3"><h5 class='mb-0'>Status</h5></div>
          <div class="col-8">
          <Form.Group as={Col} controlId="formGridState">
              <Form.Label></Form.Label>
              <Form.Control
                as="select"
                name="status"
                onChange={onChangeInput}
                defaultValue="Select Status"
              >
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
