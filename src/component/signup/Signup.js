import React, { useState } from "react";
import classes from "./signup.module.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../../redux/authSlice";
function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`https://food-server-ctbx.onrender.com/auth/register`, {
        name: username,
        email,
        password,
      });

      dispatch(register(res.data));
      navigate("/");
    } catch (error) {
      setError(false);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  };

  return (
    <div className={classes.signUpContainer}>
      <div className={classes.signUpWrapper}>
        <div className={classes.signUpLeftSide}>
          <img
            src="https://media.istockphoto.com/id/1037462770/photo/adult-woman-eating-pumpkin-soup-in-the-kitchen.jpg?s=612x612&w=0&k=20&c=wv-lGFvMU_Svk9XdkMrPCKTQm80BRP2lT5c0MCvZwwk="
            className={classes.leftImg}
          />
        </div>
        <div className={classes.signUpRightSide}>
          <h2 className={classes.title}>Sign Up</h2>
          <form onSubmit={handleSignup} className={classes.signUpForm}>
            <input
              type="text"
              placeholder="Type username"
              onChange={(e) => setUsername(e.target.value)}
            />
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
            <button className={classes.submitBtn}>Sign Up</button>
            <p>
              Already have an account? <Link to="/">Login</Link>
            </p>
          </form>
          {error && (
            <div className={classes.errorMessage}>
              Wrong credentials! Try different ones.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Signup;
