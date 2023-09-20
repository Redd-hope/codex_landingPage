import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

function NewsletterForm() {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Email submitted:', email);
  };

  return (
    <Container>
      <Row>
        <Col md={6}>
          <Form onSubmit={handleSubmit} className='mt-20'>
            <Form.Group controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={handleEmailChange}
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-3">
              Subscribe
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default NewsletterForm;
