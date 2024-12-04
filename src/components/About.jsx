import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./about.css";

const AboutUs = () => {
  return (
    <section className="about-us-section py-5">
      <Container>
        <Row>
          <Col md={12} className="text-center mb-5 py-10 bg-grey-100">
            <h2 className="main-heading text-white">About MyTripMate</h2>
            <p className="lead-text text-white">
              We are your trusted travel companion, helping you create unforgettable journeys across the globe. 
            </p>
          </Col>
        </Row>

        <Row className="about-content">
          <Col md={6}>
            <h3 className="sub-heading text-white">Our Mission</h3>
            <p className="text-white">
              At MyTripMate, our mission is to make your travel experiences unforgettable. We believe that everyone deserves to explore the world and make lasting memories. With our expert recommendations, customized itineraries, and seamless booking, we aim to provide you with the best travel experience possible, whether you're looking for adventure, relaxation, or cultural exploration.
            </p>
          </Col>

          <Col md={6}>
            <h3 className="sub-heading text-white">Why Choose Us?</h3>
            <ul className="why-choose-us text-white">
              <li>Tailored travel experiences based on your interests.</li>
              <li>Expert advice on the best destinations and activities.</li>
              <li>Seamless booking process with trusted partners.</li>
              <li>24/7 customer support to ensure a stress-free journey.</li>
              <li>Exclusive deals and offers for all travelers.</li>
            </ul>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col md={12} className="text-center">
            <Button variant="primary" href="/contact" className="cta-btn text-white">
              Contact Us Today
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;
