import React from 'react'
import mealsImage from '../../assets/meal.avif';
import classes from './Header.module.css'
import {Fragment} from 'react';
import HeaderCartButton from './HeaderCartButton.js';
const Header= props =>{
 return <Fragment>
    <header className={classes.header}>
      <h1>ReactMeals</h1>
     <HeaderCartButton onTouch={props.onShowCart}/>
    </header>
    <div className={classes[`main-image`]}>
     <img src={mealsImage} alt='a table full of food'/>
    </div>
 </Fragment>
}
export default Header;
