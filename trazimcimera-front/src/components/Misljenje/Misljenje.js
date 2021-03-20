import React from "react";
import classes from './Misljenje.css';

const Misljenje = (props) => {
    return (
        <div className={classes.Misljenje}>
            <p className={classes.Text}><strong>{props.oglas.tekst}</strong></p>
            <p>-{props.oglas.autor},<br/>
                {props.oglas.biografija}</p>
        </div>
    )
}

export default Misljenje;
