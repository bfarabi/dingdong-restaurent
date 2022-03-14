import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Form, Input } from "reactstrap";



class ComForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: "",
      rating: "",
      comment: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    //console.log(this.state);
    this.props.addComment(
      this.props.dishId,
      this.state.author,
      this.state.rating,
      this.state.comment
    );

    this.setState({
      author: "",
      rating: "",
      comment: "",
    });
    return false;
  };

  render() {
    //console.log(this.props);
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Input
            type="text"
            name="author"
            placeholder="Your Name"
            value={this.state.author}
            onChange={this.handleInputChange}
            required
          ></Input>
          <Input
            type="select"
            name="rating"
            value={this.state.rating}
            onChange={this.handleInputChange}
            required
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
          <Input
            type="textarea"
            name="comment"
            placeholder="Your comment"
            value={this.state.comment}
            onChange={this.handleInputChange}
            required
          ></Input>
          <Button type="submit" color="success">
            Submit comment
          </Button>
        </Form>
      </div>
    );
  }
}
export default ComForm;
