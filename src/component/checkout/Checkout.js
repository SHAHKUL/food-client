import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./checkout.module.css";
import { emptyProduct, orderProduct } from "../../redux/cartSlice";
import { TbTruckDelivery } from "react-icons/tb";
function Checkout() {
  const [deliver, setDeliver] = useState(false);
  const { products } = useSelector((state) => state.cart);
  const { admin } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  let totalPrice = 0;
  products.map((product) => (totalPrice += product.quantity * product.price));

  const click = () => {
    setDeliver(true);
    dispatch(emptyProduct());
    dispatch(orderProduct(false));
    console.log(dispatch(orderProduct(false)));
  };

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        {deliver ? (
          <h2>Your order deliverd successfully!!!</h2>
        ) : (
          <>
            <h2>Your order is successful</h2>
            <p>Expect it in 1 hour</p>
            <span>Total Price: ${totalPrice.toFixed(2)}</span>
            {admin && <button onClick={click} className={classes.but} >Delivered Product <TbTruckDelivery className={classes.font} /></button>}
          </>
        )}
      </div>
      
    </div>
  );
}

export default Checkout;
