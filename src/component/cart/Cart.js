import React from "react";
import classes from "./cart.module.css";
import { AiOutlineClose } from "react-icons/ai";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { orderProduct, removeProduct } from "../../redux/cartSlice";

function Cart() {
  const { products } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  var totalPrice = 0;
  products.map((pro) => (totalPrice += pro.quantity * pro.price));

  const handleRemoveProduct = (ide) => {
    dispatch(removeProduct({ _id: ide }));
  };
  const handleOrder = () => {
    if (products.length > 0) {
      navigate("/checkout");
    }
    dispatch(orderProduct(true));
  };

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          {products.length > 0 ? (
            products.map((product) => (
              <div key={product._id} className={classes.product}>
                <div
                  onClick={() => handleRemoveProduct(product._id)}
                  className={classes.closeBtn}
                >
                  <AiOutlineClose />
                </div>
                <img src={`${product.img}`} className={classes.img} />
                <div className={classes.productData}>
                  <h3 className={classes.title}>{product.title}</h3>
                  <div className={classes.productAndQuantity}>
                    <span className={classes.quantity}>
                      {product.quantity} x{" "}
                    </span>
                    <span className={classes.price}>
                      <span>$</span>
                      {product.price}
                    </span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h1 className={classes.noProducts}>
              No products in the cart. Go shopping!
            </h1>
          )}
        </div>
        <div className={classes.right}>
          <div className={classes.totalProductMsg}>
            Total products: {products.length}
          </div>
          <div className={classes.subtotalCheckoutBtns}>
            <span className={classes.subtotal}>Subtotal: ${totalPrice.toFixed(2)}</span>
            <span
              onClick={handleOrder}
              disabled={products.length === 0}
              className={classes.orderNowBtn}
            >
              Order now
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
