import React from "react";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HomePage.css";
export class HomePage extends React.Component {
  render() {
    return (
      <Container id="container">
        <Row class="row">
          <h3 class="text-bold">Header</h3>
        </Row>
        <hr></hr>
        <Row class="row">
          <h3 class="text-bold">Navbars</h3>
        </Row>
        <hr></hr>
        <Row class="row">
          <h3 class="text-bold">Hightlights</h3>
        </Row>
        <Row>
          <Col>
            <h5>The best for delivery</h5>
          </Col>
          <Col>
            <h5>Fast delivery, high success rate</h5>
          </Col>
          <Col>
            <h5>24/7 online management system</h5>
          </Col>
        </Row>
        <hr></hr>
        <Row>
          <Row class="row">
            <h3 class="text-bold">Google Map</h3>
          </Row>
        </Row>
        <hr></hr>
        <Row class="row">
          <h3 class="text-bold">Customer testimonials</h3>
        </Row>
        <Row>
          <Card id="card">
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer posuere erat a ante.{" "}
                </p>
                <footer className="blockquote-footer">
                  Someone famous in{" "}
                  <cite title="Source Title">Source Title</cite>
                </footer>
              </blockquote>
            </Card.Body>
          </Card>
        </Row>
        <Row>
          <Card id="card">
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer posuere erat a ante.{" "}
                </p>
                <footer className="blockquote-footer">
                  Someone famous in{" "}
                  <cite title="Source Title">Source Title</cite>
                </footer>
              </blockquote>
            </Card.Body>
          </Card>
        </Row>
        <hr></hr>
        <Row class="row">
          <h3 class="text-bold">Get in touch</h3>
        </Row>
        <Row class="row">
          <Form id="form">
            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Full name"></Form.Control>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control type="email" placeholder="Email address" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Phone number"
              ></Form.Control>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                as="textarea"
                rows={3}
                type="text"
                placeholder="Message"
              ></Form.Control>
            </Form.Group>

            <Button id="btn-submit" variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Row>
        <hr></hr>
        <Row class="row">
          <h3 class="text-bold">Footer</h3>
        </Row>
      </Container>
    );
  }
}
