import React, { useEffect } from "react";
import classes from "./edit.module.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import { useSelector } from "react-redux";

function Edit() {
  const params = useParams();

  const { token } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  let formik = useFormik({
    initialValues: {
      title: "",
      desc: "",
      price: "",
      category: "",
      review: "",
      img: "",
    },
    onSubmit: async (val) => {
      await axios.put(`https://food-server-ctbx.onrender.com/prod/update/${params.id}`, val, {
        headers: {
          auth: token,
        },
      });
      navigate("/home");
    },
  });

  useEffect(() => {
    fetch();
  }, []);
  const fetch = async () => {
    const res = await axios.get(
      `https://food-server-ctbx.onrender.com/prod/find/${params.id}`,
      {
        headers: {
          auth: token,
        },
      }
    );
    formik.setValues(res.data);
  };

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h2 className={classes.title}>Edit food</h2>
        <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
          <div className={classes.inputWrapper}>
            <label>Title: </label>
            <input
              type="text"
              placeholder="Title..."
              className={classes.input}
              name="title"
              value={formik.values.title}
              onChange={formik.handleChange}
            />
          </div>
          <div className={classes.inputWrapper}>
            <label>Description: </label>
            <input
              type="text"
              placeholder="Description..."
              className={classes.input}
              name="desc"
              value={formik.values.desc}
              onChange={formik.handleChange}
            />
          </div>
          <div className={classes.inputWrapper}>
            <label>Category: </label>
            <input
              type="text"
              placeholder="Category..."
              className={classes.input}
              name="category"
              value={formik.values.category}
              onChange={formik.handleChange}
            />
          </div>

          <div className={classes.inputWrapper}>
            <label>Image </label>
            <input
              type="text"
              placeholder="Category..."
              className={classes.input}
              name="img"
              value={formik.values.img}
              onChange={formik.handleChange}
            />
          </div>
          <div className={classes.inputWrapper}>
            <label>Price: </label>
            <input
              type="number"
              step={0.01}
              placeholder="Price..."
              className={classes.input}
              name="price"
              value={formik.values.price}
              onChange={formik.handleChange}
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
              name="review"
              value={formik.values.review}
              onChange={formik.handleChange}
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

export default Edit;
