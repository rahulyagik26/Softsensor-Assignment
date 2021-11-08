import React, { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";

import classes from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>Product Shop</h1>
                <Link to='/cart'>
                    <HeaderCartButton onClick={props.onShowCart} />
                </Link>
            </header>
        </Fragment>
    );
};

export default Header;
