import React from "react";
import classes from "./hero.module.css";
import { AiOutlineArrowDown } from "react-icons/ai";

function Hero() {
  return (
    <section
      style={{ height: "80vh" }}
      id="home"
      className={classes.container}
    >
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <h2 className={classes.title}>Do you crave delicious food</h2>
          <p className={classes.firstMsg}>
            But going out to take <span>food costs time....</span>
          </p>
          <p className={classes.secondMsg}>
            Why not order <span>pizza</span> or something <br />{" "}
            <span>delicious </span>
            from our restaurnt
          </p>
          <p className={classes.desc}>
            Our restaurant always puts the client above. They are our single
            most important thing for our business.
          </p>
          <div className={classes.buttons}>
            <button className={classes.buttonOrder}>Order now!</button>
            <button className={classes.buttonSee}>
              <a href="#foods">
                See what's available <AiOutlineArrowDown />{" "}
              </a>
            </button>
          </div>
        </div>
        <div className={classes.right}>
          <img
            src="https://static.vecteezy.com/system/resources/previews/023/708/591/original/man-eating-noodles-with-chopsticks-at-table-cartoon-illustration-vector.jpg"
            alt=""
            className={classes.manEatingImg}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
