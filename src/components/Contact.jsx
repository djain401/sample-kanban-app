import React, { useState } from "react";
import { Button, Container, Form, Input, TextArea } from "semantic-ui-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Your submit logic here

    // Clear the form values
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });
  };

  return (
    <Container style={{ padding: "50px", width: "50%" }}>
      <Form onSubmit={handleSubmit}>
        <Form.Field required>
          <label>First Name</label>
          <input
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
          />
        </Form.Field>
        <Form.Field required>
          <label>Last Name</label>
          <input
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
          />
        </Form.Field>
        <Form.Field
          id="form-input-control-error-email"
          control={Input}
          label="Email"
          placeholder="joe@schmoe.com"
          required
          value={formData.email}
          onChange={handleChange}
          name="email"
        />
        <Form.Field
          id="form-textarea-control-opinion"
          control={TextArea}
          label="Message"
          placeholder="type your message here"
          required
          value={formData.message}
          onChange={handleChange}
          name="message"
        />
        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
};

export default Contact;
