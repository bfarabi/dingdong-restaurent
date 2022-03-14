import React, { Component } from "react";

import MenuItem from "./MenuItem.js";
import DishDetail from "./DishDetail";
import { Button, CardColumns, Modal, ModalBody, ModalFooter } from "reactstrap";
import { connect } from "react-redux";
import { addComment, fetchDishes } from "./../../Redux/ActionCreator";
import Loading from "./Loading.js";
import Footer from "../Footer/Footer.js";

const mapStateToProps = (state) => {
  // console.log("home redux",state);
  return {
    dishes: state.dishes,
    comments: state.comments,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addComment: (dishId, author, rating, comment) =>
      dispatch(addComment(dishId, author, rating, comment)),
    fetchDishes: () => dispatch(fetchDishes()),
  };
};

class Menu extends Component {
  state = {
    selectedDish: null,
    modalOpen: false,
  };
  onDishSelect = (dish) => {
    console.log(dish);
    this.setState({
      selectedDish: dish,
      modalOpen: !this.state.modalOpen,
    });
  };
  toggleModal = () => {
    this.setState({
      modalOpen: !this.state.modalOpen,
    });
  };
  componentDidMount() {
    this.props.fetchDishes();
  }

  render() {
    document.title = "Menu";
    if (this.props.dishes.isLoading) {
      return <Loading></Loading>;
    } else {
      const menu = this.props.dishes.dishes.map((item) => (
        <MenuItem
          DishSelect={() => this.onDishSelect(item)}
          key={item.id}
          dish={item}
        />
      ));

      let dishDetail = null;
      if (this.state.selectedDish != null) {
        const comments = this.props.comments.filter((comment) => {
          return comment.dishId === this.state.selectedDish.id;
        });
        dishDetail = (
          <DishDetail
            addComment={this.props.addComment}
            comments={comments}
            dish={this.state.selectedDish}
          />
        );
      }
      return (
      <>
        <div className="container">
        <h2 class="section-title sep-type-2 text-center">
				resturant menu
			</h2>
          <div className="row">
          
            {menu}
            {menu}
            {menu}
            <Modal isOpen={this.state.modalOpen}>
              <ModalBody>{dishDetail}</ModalBody>
              <ModalFooter>
                <Button onClick={this.toggleModal} color="info">
                  Close
                </Button>
              </ModalFooter>
            </Modal>
          </div>
        </div>
        <Footer></Footer>
        </>
      );
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Menu);
