import React, { useState } from "react";
import classes from "./navbar.module.css";
import { Link } from "react-router-dom";
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/authSlice";

function Navbar() {
  const [isScrolled, setisscrolled] = useState(false);
  window.onscroll = () => {
    setisscrolled(window.scrollY === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.cart);
  const { order } = useSelector((state) => state.cart);
  const { admin } = useSelector((state) => state.auth);

  console.log(order);

  const logoutbut = () => {
    dispatch(logout());
    console.log(dispatch(logout()));
    navigate("/");
  };

  return (
    <div className={`${classes.container} ${isScrolled && classes.scrolled}`}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <Link to="/home" className={classes.title}>
            Fast Food
          </Link>
        </div>
        <div className={classes.center}>
          <ul className={classes.list}>
            <li className={classes.listItem}>
              <Link to={"/home"}>Home</Link>
            </li>
            <li className={classes.listItem}>
              <a href="#contacts">Contacts</a>
            </li>
            <li className={classes.listItem}>
              <a href="#foods">Foods</a>
            </li>
            <li className={classes.listItem}>
              <a href="#faq">FAQ</a>
            </li>
            {order ? (
              <Link to={"/checkout"} className={classes.listItem}>
                <a href="#faq">Order Status</a>
              </Link>
            ) : null}

            {admin && (
              <li className={classes.listItem} >
                <Link to={"/create"} >Create</Link>
              </li>
            )}
          </ul>
        </div>
        <div className={classes.right}>
          <AiOutlineUser className={classes.userIcon} />
          <Link to="/cart" className={classes.cartContainer}>
            <AiOutlineShoppingCart className={classes.cartIcon} />
            <div className={classes.cartQuantity}>{products.length}</div>
          </Link>
          <button className={classes.logout} onClick={logoutbut}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
