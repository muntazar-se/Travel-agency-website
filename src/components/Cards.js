import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
function Cards() {
  return (
    <div className="cards">
      <h1>Check out these epic desnation!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
        <ul className="cards__items">
          <CardItem src="/images/img-2.jpg" text="explore the hiddin water deep in the amazon jungle" path="/services" label=" adventure"/>
            <CardItem src="/images/img-8.jpg" text="explore the hiddin water deep in the amazon jungle" path="/services" label=" adventure"/>

          </ul>
          <ul className="cards__items">
            <CardItem src="/images/img-1.jpg" text="explore the hiddin water deep in the amazon jungle" path="/services" label=" adventure"/>
            <CardItem src="/images/img-5.jpg" text="explore the hiddin water deep in the amazon jungle" path="/services" label=" adventure"/>
            <CardItem src="/images/img-4.jpg" text="explore the hiddin water deep in the amazon jungle" path="/services" label=" adventure"/>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
