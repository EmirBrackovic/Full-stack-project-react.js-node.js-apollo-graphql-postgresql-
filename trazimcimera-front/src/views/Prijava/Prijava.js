import React from "react";
import classes from "./Prijava.css";
import Layout from "../../components/Layout/Layout";
import Main from '../../components/Main/Main';

const Prijava = (props) => {
    return (
        <Layout>
            <Main>
                <div className={classes.Prijava}>
                    <h1>Prijavi se</h1>
                    <div className={classes.Forma}>
                        <label><strong>Korisničko ime</strong> (required)</label>
                        <input type="text"/>
                        <label><strong>Lozinka</strong> (required)</label>
                        <input type="password"/>
                        <button><strong>PRIJAVA</strong></button>
                    </div>
                </div>
            </Main>
        </Layout>
    )
}

export default Prijava;
