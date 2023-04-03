import React from 'react'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'
import { useContext,useEffect ,useState} from 'react'
import cartContext from '../../store/Cart-context'
const HeaderCartButton = (props) => {
  const[btnisHigh,setBtnisHigh]=useState(false);
  const ctx=useContext(cartContext);
  const numberOfCartItem=ctx.items.reduce((currNum,item)=>{
    return currNum+item.amount;
  },0);
  const btnClasses=`${classes.button} ${btnisHigh ? classes.bump:' '}`
  const {items} =ctx;
useEffect(()=>{
  if(ctx.items.length===0)
  {
    return;
  }
  setBtnisHigh(true);

  const timer=setTimeout(()=>{
   setBtnisHigh(false);
  },300)
  return()=>{
    clearTimeout(timer);
  }
},[items])

  return <button className={btnClasses} onClick={props.onTouch}>
    <span className={classes.icon}>
        <CartIcon />
    </span>
    <span>Your Cart</span>
    <span className={classes.badge}>
        {numberOfCartItem}
    </span>
   </button>
  
}

export default HeaderCartButton;