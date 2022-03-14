import React from "react";
import Footer from './../Footer/Footer';

const About = () => {
  document.title = "About";
  return (
    <div className="">
      <div className="row px-3 w-100">
        <div className="col-md-6 bg-light">
          <div className="text-center py-5">
            <h1> WHO WE ARE & HISTORY</h1>
            <h4 className="text-info">
              {" "}
              <i>Our Story</i>{" "}
            </h4>
            <p className="text-justify">
              {" "}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
              facere et, ab fugit sit, aliquid blanditiis voluptas quae odit
              nisi explicabo quia reiciendis in cum ipsam odio consequuntur unde
              saepe. Delectus autem, non rem nam placeat eligendi perspiciatis
              architecto sunt nesciunt tempore laboriosam obcaecati quis
              reiciendis minima? Voluptatibus a quo est vero esse! Excepturi
              atque aliquid quis unde error, autem molestiae adipisci odio illo
              eveniet iure. Eligendi natus dolore labore vero? Similique
              laboriosam, inventore tempore assumenda non aut labore dolorem ex
              placeat dolorum, nesciunt beatae rem! Ducimus asperiores nisi
              recusandae.{" "}
            </p>
          </div>
        </div>
        <div className="col-md-6 ">
        <img
              src="https://template-html.egprojets.com/food-lover/assets/img/demo/team/03.png"
              alt=""
            ></img>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default About;
