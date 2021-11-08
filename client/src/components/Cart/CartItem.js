import classes from "./CartItem.module.css";

const CartItem = (props) => {
  return (
    <li className={classes["cart-item"]}>
      <div>
        <img src={props.image} alt="" width='200px' height='200px' />
      </div>
      <div style={{ marginLeft: '50px' }}>
        <h5>{props.name}</h5>
        <div className={classes.productPrice}>
          <i className="fas fa-rupee-sign"></i>
          <p>{props.price}</p>
        </div>
        <div className={classes.qntBtn}>
          Quantity:
          <button onClick={props.onRemove}>-</button>
          <p>{props.amount}</p>
          <button onClick={props.onAdd}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;