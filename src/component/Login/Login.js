import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import classes from "./login.module.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "../../redux/authSlice";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`https://food-server-ctbx.onrender.com/auth/login`, {
        email,
        password,
      });
      console.log(res.data);
      if (res.data.token) {
        dispatch(login(res.data));
        console.log(dispatch(login(res.data)));
        navigate("/home");
      } else if (res.data.message) {
        setError(res.data.message);
        setTimeout(() => {
          setError("");
        }, 2000);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={classes.loginContainer}>
      <div className={classes.loginWrapper}>
        <div className={classes.loginLeftSide}>
          <img
            src="https://media.istockphoto.com/id/1037462770/photo/adult-woman-eating-pumpkin-soup-in-the-kitchen.jpg?s=612x612&w=0&k=20&c=wv-lGFvMU_Svk9XdkMrPCKTQm80BRP2lT5c0MCvZwwk="
            className={classes.leftImg}
          />
        </div>
        <div className={classes.loginRightSide}>
          <h2 className={classes.title}>Login</h2>
          <form onSubmit={handleLogin} className={classes.loginForm}>
            <input
              type="text"
              placeholder="Type email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Type password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className={classes.submitBtn}>Login</button>
            <p>
              Don't have an account? <Link to="/signup">Sign up</Link>
            </p>
          </form>
          {error && <div className={classes.errorMessage}>{error}</div>}
        </div>
     
      </div>
      <span>
        <h1>username:admin</h1>
        <h1>password:admin</h1>
        <br/>
        <h1>username:user</h1>
        <h1>password:user</h1>
        </span>
    </div>
  );
}

export default Login;
