import React from "react";
import { useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import classes from "./foodcatalog.module.css";
import { useEffect } from "react";
import axios from "axios";

function Foodcatalog() {
  const [filteredFoods, setFilterfoods] = useState([]);
  const [mess,setMess]=useState("")
  const location = useLocation();
  const param = useParams();
  const foodEndpoint = location.pathname.split("/")[2];

  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    foodTypes();
  }, []);

  const foodTypes = async () => {
    const res = await axios.get(
      `https://food-server-ctbx.onrender.com/prod?category=${foodEndpoint}`,
      {
        headers: {
          auth: token,
        },
      }
    );
    setMess(res.data.message);
    setFilterfoods(res.data);
    console.log(mess);
  };



  return (
    <div className={classes.container} >
      <div className={classes.wrapper}>
        {filteredFoods?.length !== 0 && (
          <h2 className={classes.title}>
            The best {foodEndpoint} in the region
          </h2>
        )}
        <div className={classes.foods}>
          {filteredFoods.length !== 0 ? (
            filteredFoods.map((f) => (
              <Link to={`/food/${f._id}`} key={f._id} className={classes.food}>
                <div className={classes.imgContainer}>
                  <img
                    src={`${f?.img}`}
                    className={classes.foodImg}
                  />
                </div>
                <div className={classes.foodDetails}>
                  <h4 className={classes.foodTitle}>{f?.title}</h4>
                  <span className={classes.price}>
                    <span>$</span> {f?.price}
                  </span>
                </div>
              </Link>
            ))
          ) : (
            <h1 className={classes.noQuantity}>No {foodEndpoint} right now</h1>
          )}
        </div>
      </div>
     
    </div>
  );
}

export default Foodcatalog;
