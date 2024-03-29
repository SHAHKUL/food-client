import React from "react";
import classes from "./creat.module.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

function Create() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [review, setReview] = useState("");

  const { token } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  const handleCreateProduct = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `https://food-server-ctbx.onrender.com/prod/`,
        {
          title,
          desc,
          price,
          desc,
          category,
          review,
          img: image,
        },
        {
          headers: {
            auth: token,
          },
        }
      );
      console.log(res.data);
      navigate(`/food/${res.data._id}`);
    } catch (error) {}
  };

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h2 className={classes.title}>Create food</h2>
        <form onSubmit={handleCreateProduct} encType="multipart/form-data">
          <div className={classes.inputWrapper}>
            <label>Title: </label>
            <input
              type="text"
              placeholder="Title..."
              className={classes.input}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className={classes.inputWrapper}>
            <label>Description: </label>
            <input
              type="text"
              placeholder="Description..."
              className={classes.input}
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>
          <div className={classes.inputWrapper}>
            <label>Category: </label>
            <input
              type="text"
              placeholder="Category..."
              className={classes.input}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>

          <div className={classes.inputWrapper}>
            <label>Image </label>
            <input
              type="text"
              placeholder="image address..."
              className={classes.input}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
          <div className={classes.inputWrapper}>
            <label>Price: </label>
            <input
              type="number"
              step={0.01}
              placeholder="Price..."
              className={classes.input}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className={classes.inputWrapper}>
            <label>Review: </label>
            <input
              type="number"
              step={0.1}
              min={1}
              max={5}
              placeholder="Review..."
              className={classes.input}
              onChange={(e) => setReview(e.target.value)}
            />
          </div>
          <div className={classes.buttonWrapper}>
            <button type="submit" className={classes.submitBtn}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Create;
