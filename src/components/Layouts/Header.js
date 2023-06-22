import React, { Fragment } from "react";
import header from "./header.module.css"
import HeaderCartButton from "./HeaderCartButton";
import mealImage from "./meal.jpeg"
const Header = () =>{
    return <Fragment>
        <header className={header.header}>
            <h1>
                React Meal
            </h1>
            <HeaderCartButton></HeaderCartButton>
        </header>
        <div>
            <img src={mealImage} alt="img" />
        </div>
    </Fragment>
}
export default Header