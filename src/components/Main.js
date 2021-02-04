import React from "react";
import Header from "./Header";
import "./Main.css";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import {Container, Row, Col, Card} from 'react-bootstrap'


export default function Main() {
  
  return (
    <>
      <Header />
     
         <h4>Insert coffee cup photos here</h4>
         <Container>
  <Row>

    <Col xs={6} md={4}>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          
          <Form.Group>
              <Form.File id="exampleFormControlFile1" label="Insert Cup Photo" />
            </Form.Group>
        </Card.Body>
      </Card>
    </Col>

    <Col xs={6} md={4}>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          
          <Form.Group>
              <Form.File id="exampleFormControlFile1" label="Insert Cup Photo" />
            </Form.Group>
        </Card.Body>
      </Card>
    </Col>

    <Col xs={6} md={4}>
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="exampleFormControlFile1" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          
            <Form.Group>
              <Form.File id="exampleFormControlFile1" label="Insert Cup Photo" />
            </Form.Group>
        </Card.Body>
      </Card>
    </Col>

  </Row>
</Container>

    <Form>
    

      <Form.Group controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your Name here" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="dob">
        <Form.Label>Birthday</Form.Label>
        <Form.Control type="date" name="dob" placeholder="Date of Birth" />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Gender</Form.Label>
      <Form.Control as="select" defaultValue="Select Gender">
        <option>Male</option>
        <option>Female</option>
        <option>Other</option>
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Status</Form.Label>
      <Form.Control as="select" defaultValue="Select Status">
        <option>Married</option>
        <option>Engaged</option>
        <option>Divorced</option>
        <option>Single</option>
      </Form.Control>
    </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </>
  );
}
