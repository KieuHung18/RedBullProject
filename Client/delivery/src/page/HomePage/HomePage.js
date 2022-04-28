import React from "react";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HomePage.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export class HomePage extends React.Component {
  render() {
    return (
      <Container id="container">
        {/* HIGHLIGHT  */}
        <Row class="row">
        <div className="col-md-6 content_banner ">
          <h1>Delivering happiness since 2017</h1>
          {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <div className="search_order">
              <input type="text" placeholder="Order search" name="" id="" />
              <button className="btn ">Search</button>
          </div> */}
        </div> 
          {/* <h2 class="text-h2">Highlights</h2> */}
        </Row>
        <Row>
          <Col sm={12} md={4} lg={4}>
            <div>
              <i class="fa-solid fa-award icon"></i>
            </div>
            <h5 class="text-h5">The best for delivery</h5>
          </Col>
          <Col sm={12} md={4} lg={4}>
            <div>
              <i class="fa-solid fa-truck-fast icon"></i>
            </div>
            <h5 class="text-h5">Fast delivery, high success rate</h5>
          </Col>
          <Col sm={12} md={4} lg={4}>
            <div>
              <i class="fa-solid fa-signal icon"></i>
            </div>
            <h5 class="text-h5">24/7 online management system</h5>
          </Col>
        </Row>
        <hr></hr>
        <Row>
          <Row class="row">
            <h3 class="text-bold">A new Perspective of Business Delivery</h3>
          </Row>
        </Row>
        <hr></hr>
        <Row class="row">
          <h3 class="text-h2">Customer testimonials</h3>
        </Row>
        <Row>
          <Card id="card" class="card">
            <Row>
              <Col sm={12} md={2}>
                <Card.Title>
                  <i class="fa-solid fa-message icon2"></i>
                </Card.Title>
              </Col>
              <Col sm={12} md={10}>
                {" "}
                <Card.Body>
                  <blockquote className="blockquote mb-0 text-p">
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
              </Col>
            </Row>
          </Card>
        </Row>
        <Row>
          <Card id="card">
            <Row>
              <Col sm={12} md={2}>
                <Card.Title>
                  <i class="fa-solid fa-message icon2"></i>
                </Card.Title>
              </Col>
              <Col sm={12} md={10}>
                {" "}
                <Card.Body>
                  <blockquote className="blockquote mb-0 text-p">
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
              </Col>
            </Row>
          </Card>
        </Row>

        <hr></hr>
        <Row class="row">
          <h3 class="text-h2">Contact Us</h3>
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

            <Button class="btn-submit" id="btn-submit" type="submit">
              Send Message
            </Button>
          </Form>
        </Row>
      </Container>
    );
  }
}
