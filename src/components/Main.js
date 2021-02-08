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
        
        <Row className="justify-content-md-center">
            
              <Col sm={9}></Col>

                  <Row>

                    <Col sm={3}>
                      <Card style={{ width: '14rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                          <Card.Title>Card Title</Card.Title>
                          
                          <Form.Group>
                              <Form.File id="exampleFormControlFile1" label="Insert Cup Photo" />
                            </Form.Group>
                        </Card.Body>
                      </Card>
                    </Col>

                    <Col sm={3}>
                      <Card style={{ width: '14rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                          <Card.Title>Card Title</Card.Title>
                          
                          <Form.Group>
                              <Form.File id="exampleFormControlFile1" label="Insert Cup Photo" />
                            </Form.Group>
                        </Card.Body>
                      </Card>
                    </Col>

                    <Col sm={3}>
                      <Card style={{ width: '14rem' }}>
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
        <Form>
          <Row>
            <Col sm={3}><div>Name</div></Col>
            <Col sm={6}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label></Form.Label>
                  <Form.Control type="text" placeholder="Enter your Name here" />
                  <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>
            </Col>
	      	</Row>  

          <Row>
            <Col sm={3}>Birthday</Col>
            <Col sm={6}>
            <Form.Group controlId="dob">
              <Form.Label></Form.Label>
              <Form.Control type="date" name="dob" placeholder="Date of Birth" />
             </Form.Group>

            </Col>
	      	</Row>

          <Row>
            <Col sm={3}>Gender</Col>
            <Col sm={6}>
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label></Form.Label>
              <Form.Control as="select" defaultValue="Select Gender">
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </Form.Control>
            </Form.Group>

            </Col>
	      	</Row>          

          <Row>
            <Col sm={3}>Status</Col>
            <Col sm={6}>
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label></Form.Label>
              <Form.Control as="select" defaultValue="Select Status">
                <option>Married</option>
                <option>Engaged</option>
                <option>Divorced</option>
                <option>Single</option>
              </Form.Control>
            </Form.Group>
            </Col>
		      </Row>

          <Row>
            <Col sm={9}>
            <span> </span>
            </Col>
		      </Row>


          <Row>
            <Col sm={9}>
            <Card>
              <Card.Body>Insert photos of the coffee cup and saucer to be read. Enter name, birthday, gender, and status. Then press the button below and get the oracle.</Card.Body>
            </Card>
            </Col>
		      </Row>

          <Row>
          <Col sm={9}>
          <Button variant="primary" type="submit">
          Get Oracle
        </Button>
          </Col>
          </Row>

          </Form>
       
         
        </Row>
      
      </Container>
  );
  </>
  )
}
