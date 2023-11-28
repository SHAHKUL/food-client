import React, { useEffect, useState } from "react";
import classes from "./fooddetails.module.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";

import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";
import { addProduct } from "../../redux/cartSlice";
import { MdDelete } from "react-icons/md";

function FoodDetails() {
  const [foodDetails, setfoodDetail] = useState("");
  const [quantity, setQuantity] = useState(1);

  const { id } = useParams();
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);
  const { admin } = useSelector((state) => state.auth);
 
  const dispatch = useDispatch();

  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    const res = await axios.get(`https://food-server-ctbx.onrender.com/prod/find/${id}`, {
      headers: {
        auth: token,
      },
    });
    setfoodDetail(res.data);
  };

  const handleDelete = async () => {
    await axios.delete(`https://food-server-ctbx.onrender.com/prod/del/${id}`, {
      headers: {
        auth: token,
      },
    });

    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this file!!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios.delete(`https://food-server-ctbx.onrender.com/prod/del/${id}`, {
          headers: {
            auth: token,
          },
        });
        swal("Poof! Your  Product has been deleted Successfully!!", {
          icon: "success",
        });
        navigate("/home");
      } else {
        swal("Your Product is not deleted!");
      }
    });
  };

  const handleEdit = () => {
    navigate(`/edit/${id}`);
  };

  const changeQuantity = (command) => {
    if (command === "dec") {
      if (quantity === 1) return;
      setQuantity((prev) => prev - 1);
    } else if (command === "inc") {
      setQuantity((prev) => prev + 1);
    }
  };

  const addToCart = () => {
    dispatch(addProduct({ ...foodDetails, quantity }));
  };

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <img src={`${foodDetails?.img}`} />
        </div>
        <div className={classes.right}>
          <span style={{ display: "flex" }}>
            <h2 className={classes.title}>{foodDetails?.title}</h2>
            <span>
          {admin && <FaEdit className={classes.edit} onClick={handleEdit} />}
            {admin &&  <MdDelete
                className={classes.edit}
                style={{ color: "#CC0010" }}
                onClick={handleDelete}
              />}
            </span>
          </span>
          <div className={classes.price}>
            Price: <span>$</span> {foodDetails?.price}
          </div>
          <div className={classes.quantity}>
            <button
              disabled={quantity === 1}
              onClick={() => changeQuantity("dec")}
            >
              -
            </button>
            <span className={classes.quantityNumber}>{quantity}</span>
            <button onClick={() => changeQuantity("inc")}>+</button>
          </div>
          <div className={classes.category}>
            <h3>Category: </h3>
            <span className={classes.categoryName}>
              {foodDetails?.category}
            </span>
          </div>
          <div className={classes.productDesc}>
            <div>Description: </div>
            <p>
              {foodDetails?.desc?.length > 50
                ? `${foodDetails?.desc}`.slice(0, 50)
                : foodDetails?.desc}
            </p>
          </div>
          <button onClick={addToCart} className={classes.addToCart}>
            Add To Cart <AiOutlineShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
}

export default FoodDetails;
