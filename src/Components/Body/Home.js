import React, { Component } from "react";

import "./Home.css";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

// const mapStateToProps = (state) => {
//  console.log("home redux",state);
//  return  {
//      dishes : state.dishes
//  }
// }
class Home extends Component {
  // componentDidMount() {
  //     console.log('home state', this.state);
  //     console.log('home props', this.props);
  // }

  render() {
    document.title = "Dingdong Restaurant";
    return (
      <div className="container-fluid px-0 w-100">
        <section id="main-slider" className="parallax-window parallax-bg fx-bg">
          <div className="section-slogan">
            <h2>Choose Your Favorite Food</h2>
            <Link to="menu">
              <h3 className="btn btn-info">See Our Menu</h3>
            </Link>
          </div>
        </section>
        <div className="w-100 d-block row m-0 ">
          <div className="py-3">
            <h1>BEST SERVICES</h1>
          </div>
        </div>
        
        
            <div className="row w-100 m-0 py-5 bg-light">
              <div className="col-sm-6 col-md-4 service-item">
                <img src="https://img.icons8.com/office/62/000000/hamburger.png" />
                <div>
                  <h4>Best Dishes</h4>
                  <p>
                    Lorem ipsum dolor sit amet, tetur Vesti bulum vel ipsum
                    ullarper as This is Photoshop's version.
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 service-item">
                <img src="https://img.icons8.com/office/62/000000/hamburger.png" />
                <div>
                  <h4>Premium Cafe</h4>
                  <p>
                    Lorem ipsum dolor sit amet, tetur Vesti bulum vel ipsum
                    ullarper as This is Photoshop's version.
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 service-item">
                <img src="https://img.icons8.com/office/62/000000/hamburger.png" />
                <div>
                  <h4>Drinks &amp; Soda</h4>
                  <p>
                    Lorem ipsum dolor sit amet, tetur Vesti bulum vel ipsum
                    ullarper as This is Photoshop's version.
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 service-item">
                <img src="https://img.icons8.com/office/62/000000/hamburger.png" />
                <div>
                  <h4>Reservation</h4>
                  <p>
                    Lorem ipsum dolor sit amet, tetur Vesti bulum vel ipsum
                    ullarper as This is Photoshop's version.
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 service-item">
                <img src="https://img.icons8.com/office/62/000000/hamburger.png" />
                <div>
                  <h4>Custom Dishes</h4>
                  <p>
                    Lorem ipsum dolor sit amet, tetur Vesti bulum vel ipsum
                    ullarper as This is Photoshop's version.
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 service-item">
                <img src="https://img.icons8.com/office/62/000000/hamburger.png" />
                <div>
                  <h4>Special Offers</h4>
                  <p>
                    Lorem ipsum dolor sit amet, tetur Vesti bulum vel ipsum
                    ullarper as This is Photoshop's version.
                  </p>
                </div>
              </div>
            </div>
         
       

        <div className="w-100 d-block row px-3 m-0 ">
          <div className="py-3">
            <h4>Chef Team</h4>
            <h1>BEST CHEFS FOR YOU</h1>
          </div>
        </div>

        <div className="row w-100 m-0">
          <div className="col-md-4 border">
            <img
              src="https://template-html.egprojets.com/food-lover/assets/img/demo/team/03.png"
              alt=""
            ></img>
          </div>
          <div className="col-md-4 border">
            <img
              src="https://template-html.egprojets.com/food-lover/assets/img/demo/team/04.png"
              alt=""
            ></img>
          </div>
          <div className="col-md-4 border">
            <img
              src="https://template-html.egprojets.com/food-lover/assets/img/demo/team/03.png"
              alt=""
            ></img>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default Home;
