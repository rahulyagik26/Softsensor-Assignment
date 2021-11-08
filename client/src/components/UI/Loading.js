import React from 'react';
import classes from "./Loading.module.css";

const Loading = () => {
    return (
        <div className={classes.spinner}>
            <div className="bounce1"></div>
            <div className="bounce2"></div>
            <div className="bounce3"></div>
        </div>
    )
}

export default Loading
