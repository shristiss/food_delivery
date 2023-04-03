import classes from "./Cart.module.css";
import { useContext } from "react";
import CartContext from "../../store/Cart-context";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import Checkout from "./Checkout"
const Cart = (props) => {
  const cartctx = useContext(CartContext);
  const totalAMount = `$${cartctx.totalAmount.toFixed(2)}`;
  const hasItems = cartctx.items.length > 0;
  const cartItemRemoveHandler = id =>{
    cartctx.removeItem(id)
  }
  const cartItemAddHandler=item=>{
   cartctx.addItem({...item,amount:1});
  } 

  const cartitems = (
    <ul className={classes["cart-items"]}>
      {cartctx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null,item.id)}
          onAdd={cartItemAddHandler.bind(null,item)}
        />
      ))}
    </ul>
  );
  const orderHandler()=>{

  })
  return (
    <Modal onClose={props.onClose}>
      {cartitems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAMount}</span>
      </div>
      <Checkout />
      <div className={classes.actions}>
        <button className={classes["button-alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={classes.button} onClick={}>Order</button>}
      </div>
