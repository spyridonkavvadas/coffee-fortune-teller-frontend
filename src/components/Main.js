import React, {useState} from "react";
import Header from "./Header";
import "./Main.css";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {Container, Col, Card} from 'react-bootstrap';
import { FaUserAlt, FaCalendarDay, FaTransgender } from "react-icons/fa";
import { IoIosHeartHalf } from "react-icons/io";



export default function Main() {

  const [image, setImage] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const handleChange = e => setImage(URL.createObjectURL(e.target.files[0]));
  const handleChange2 = e => setImage2(URL.createObjectURL(e.target.files[0]));
  const handleChange3 = e => setImage3(URL.createObjectURL(e.target.files[0]));

  return (
    <>
      <Header />
      <Container>
       {/* Fortune Teller Persona*/}
      <div class="row align-items-center bg-faded">
      <div class='col-3'><img src={"https://play-lh.googleusercontent.com/-J9QX8gUIuN9_3sSsLuYU0NssigY5hpQfq4nsQaJp6NPvqYf65bq6WQSWlbVs6pBzGK5"} alt={"Coffee Fortune Teller"} width={'130px'}/></div>
      {/* Instructions */}
      <div class='col-6'id='inst-text'>
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
            <Card.Img variant="top"  src={image} alt="" width={'150px'} height={'150px'}/>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Form.Group> 
                  <input type="file" onChange={handleChange}/>
                
                </Form.Group>
              </Card.Body>
            </Card>
          </div>

          <div class="col-4">
            <Card>
              <Card.Img variant="top"  src={image2} alt="" width={'150px'} height={'150px'}/>
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Form.Group>
                    <Form.File type="file" onChange={handleChange2} />
                  </Form.Group>
              </Card.Body>
            </Card>
          </div>
            
          <div class="col-4">
          <Card>
              <Card.Img variant="top" src={image3} alt="" width={'150px'} height={'150px'}/>
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Form.Group>
                    <Form.File id="uploadPhoto" type="file" onChange={handleChange3} />
                  </Form.Group>
              </Card.Body>
            </Card>
          </div>
        </div>

        <Form>
      {/*Enter Name*/}
        <div class="row">
          <div class="col-2"><h5>Name</h5></div>
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
        <div class="col-2"><h5>Birthday</h5></div>
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
        <div class="col-2"><h5>Gender</h5></div>
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
       <div class="row">
        <div class="col-2"><h5>Status</h5></div>
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
        <Button variant="primary" type="submit" size="lg">
          Get Oracle
        </Button>
        </div>
      </div>
       
    </Form>

  </Container>

  </>
  )
}
