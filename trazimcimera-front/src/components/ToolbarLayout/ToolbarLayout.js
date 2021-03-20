import React from "react";
import classes from './ToolbarLayout.css';
import Logo from "../Logo/Logo";

const ToolbarLayout = (props) => {
    return (
        <div>
            <div className={classes.Toolbar}>
                <Logo />
            </div>
            {props.children}
        </div>
    )
}

export default ToolbarLayout;
