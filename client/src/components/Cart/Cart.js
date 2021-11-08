import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { CartContext } from "../../store/cart-context";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  console.log(cartCtx)
  const totalAmount = `${cartCtx.totalAmount.toFixed(2)}`;

  const hasItem = cartCtx.items.length > 0;

  const addItemHandler = (item) => {
    cartCtx.addItem(item);
    console.log(item)
  };
  const removeItemHandler = (id) => {
    console.log(id);
    cartCtx.removeItem(id);
  };

  const cartItems = cartCtx.items.map((item) => {
    return (
      <CartItem
        key={item.id}
        id={item.id}
        name={item.name}
        price={item.price}
        image={item.image}
        amount={item.amount}
        onAdd={addItemHandler.bind(null, item)}
        onRemove={removeItemHandler.bind(null, item.id)}
      />
    );
  });

  return (
    hasItem ?
      (<div className={classes.cart}>
        <ul>{cartItems}</ul>
        <div className={classes.productPrice}>
          <p>Total Price:&nbsp; </p>
          <i className="fas fa-rupee-sign"></i>
          <p>{totalAmount}</p>
        </div>
        <div className={classes.orderBtn}>
          <button >Place Your Order</button>
          <Link to='/'>
            <button >Back to Shop</button>
          </Link>
        </div>
      </div>) : (<>
        <h2 className={classes.noItem}>No Items in the Cart</h2>
        <div className={classes.orderBtn}>
          <Link to='/'>
            <button >Back to Shop</button>
          </Link>
        </div>
      </>)
  )
};

export default Cart;