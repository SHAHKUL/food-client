import React from "react";
import Hero from "../hero/Hero";
import classes from "./home.module.css";
import Food from "../food/Food";
import Newsletter from "../newsletter/Newsletter";

function Home() {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <Hero />
        <div className={classes.delivery}>
          <div className={classes.titles}>
            <span className={classes.deliverySubtitle}>Delivery</span>
            <h2 className={classes.deliveryTitle}>Always on time for you</h2>
          </div>
          <div className={classes.deliveryInfos}>
            <div className={classes.deliveryInfo}>
              <img
                src="https://www.shutterstock.com/image-vector/man-riding-red-scooter-delivery-600nw-1701243736.jpg"
                alt="delivery guy with scooter image"
                className={classes.firstImg}
              />
              <h3>Our delivery guy is always on time</h3>
            </div>
            <div className={classes.deliveryInfo}>
              <img
                src="https://cdn.dribbble.com/users/2454973/screenshots/15731486/media/adf6a9597661bffcac62b62f16ffeb33.jpg?resize=400x0"
                alt="delivery guy with location image"
                className={classes.secondImg}
              />
              <h3>He works very hard</h3>
            </div>
            <div className={classes.deliveryInfo}>
              <img
                src="https://media.istockphoto.com/id/1259533063/vector/online-shopping-and-delivery-concept-male-courier-delivering-parcel-to-female-customer.jpg?s=612x612&w=0&k=20&c=ytZqPjqT9lDcpThkqYXNqfOWPu1XG0QaXrU7X3tCcws="
                alt="delivery guy friendly and social image"
                className={classes.thirdImg}
              />
              <h3>He is friendly and social</h3>
            </div>
          </div>
        </div>
        <Food />
        <Newsletter />
      </div>
    </div>
  );
}

export default Home;
