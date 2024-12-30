import { Container, Row, Col } from "react-bootstrap";
import { ContactForm } from "./ContactForm";

export const Contact = () => {
  return (
    <Container>
      <Row className="py-5">
        <Col lg={5} className="pb-2 box-shadow">
          <ContactForm />
        </Col>
        <Col lg={7} className="pb-2">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2833.2250748003!2d19.214720892517168!3d44.75582430584045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475be8e31ecf9883%3A0xadc17647fefad929!2sAtinska%2025%2C%20Bijeljina%2076300!5e0!3m2!1sen!2sba!4v1710427192021!5m2!1sen!2sba"
            width="100%"
            height="384px"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="border-radious-10"
          />
        </Col>
      </Row>
    </Container>
  );
};
