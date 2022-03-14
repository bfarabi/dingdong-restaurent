import React, { Component } from "react";

import { Col, Form, FormGroup, Input, Label, Button } from "reactstrap";
import Footer from "../Footer/Footer";

// const required = val => val && val.length;
// const isNumber = val => !isNaN(Number(val));
// const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      telnum: "",
      email: "",
      agree: false,
      contactType: "",
      message: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
handleInputChange = event => {
    const value = event.target.type === 'checkbox'? event.target.checked: event.target.value;
    const name = event.target.name;
    this.setState({
        [name]: value
    })
}

 handleSubmit = (e) =>{
    
    e.preventDefault();
    console.log(this.state);
   return false
    
}
  render() {
    document.title ="Contact";
    return (
        <div className="bg-light pt-3">
      <div className="container ">
     
        <div className="row row-content text-left">
          <div className="col-12 col-md-7">
            <h3>Send us your feedback</h3>
          </div>
          <div className="col-12">
            <Form onSubmit={ this.handleSubmit}>
              <FormGroup row>
                <Label htmlFor="firstname" md={2}>
                  First Name
                </Label>
                <Col md={10}>
                  <Input
                  onChange={this.handleInputChange}
                    value={this.state.firstname}
                    type="text"
                    name="firstname"
                    placeholder="Your First Name"
                  ></Input>
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label htmlFor="lastname" md={2}>
                  Last Name
                </Label>
                <Col md={10}>
                  <Input
                  onChange={this.handleInputChange}
                    value={this.state.lastname}
                    type="text"
                    name="lastname"
                    placeholder="Your last Name"
                  ></Input>
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label htmlFor="telnum" md={2}>
                  Contact tel.
                </Label>
                <Col md={10}>
                  <Input
                  onChange={this.handleInputChange}
                    value={this.state.telnum}
                    type="number"
                    name="telnum"
                    placeholder="Your Phone Number"
                  ></Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="email" md={2}>
                  Email
                </Label>
                <Col md={10}>
                  <Input
                  onChange={this.handleInputChange}
                    value={this.state.email}
                    type="email"
                    name="email"
                    placeholder="Your Email"
                  ></Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md={{ size: 6, offset: 2 }}>
                  <FormGroup check>
                    <Label check>
                      <Input
                      onChange={this.handleInputChange}
                        type="checkbox"
                        name="agree"
                        checked={this.state.agree}
                      ></Input>
                      <strong>May we contact you?</strong>
                    </Label>
                  </FormGroup>
                </Col>
                <Col md={{ size: 3, offset: 1 }}>
                  <Input
                  onChange={this.handleInputChange}
                    type="select"
                    name="contactType"
                    value={this.state.contactType}
                  >
                    <option >Tel.</option>
                    <option >Email</option>
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="message" md={2}>
                  Your feedback
                </Label>
                <Col md={10}>
                  <Input
                  onChange={this.handleInputChange}
                    value={this.state.message}
                    type="textarea"
                    name="message"
                    placeholder="Your Message..."
                    rows="6"
                  ></Input>
                </Col>
              </FormGroup>
              <FormGroup>
                <Col md={{ size: 10, offset: 2 }}>
                  <Button type="submit" color="info" >
                      Send feedback
                  </Button>
                  
                </Col>
              </FormGroup>
            </Form>
          </div>
        </div>
      </div>
      <Footer></Footer>
      </div>
    );
  }
}

export default Contact;
