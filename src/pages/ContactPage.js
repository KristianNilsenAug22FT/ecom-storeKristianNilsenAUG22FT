import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 44px;
  margin-bottom: 20px;
  margin-top: 50px;
  text-align: center;
  color: #493A84;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;

const Form = styled.form`
  max-width: 400px;
  margin: 0 auto;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    subject: '',
    email: '',
    body: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    // Clear input fields
    setFormData({
      fullName: '',
      subject: '',
      email: '',
      body: ''
    });
  };

  return (
    <Container>
      <Title>Contact Us</Title>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="fullName">Full Name:</Label>
          <Input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            minLength={3}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="subject">Subject:</Label>
          <Input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            minLength={3}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email:</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="body">Body:</Label>
          <TextArea
            id="body"
            name="body"
            value={formData.body}
            onChange={handleChange}
            required
            minLength={3}
          />
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
}

export default ContactPage;
