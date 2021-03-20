import React from "react";
import classes from './Registracija.css';
import Layout from "../../components/Layout/Layout";
import Main from "../../components/Main/Main";
import Footer from "../../components/Footer/Footer";

const Registracija = (props) => {
    return (
        <Layout>
            <Main>
                <div>
                    <h1>Registracija</h1>
                    <p className={classes.text}>Pridruživanjem našoj zajednici dobijate mogućnost da objavljujete oglase na našoj stranici! </p>
                    <div className={classes.Forma}>
                        <label><strong>Ime</strong> (required)</label>
                        <input type="text"/>
                        <label><strong>Prezime</strong> (required)</label>
                        <input type="text"/>
                        <label><strong>Datum rođenja</strong> (required)</label>
                        <input type="text"/>
                        <label><strong>Email</strong> (required)</label>
                        <input type="text"/>
                        <label><strong>Korisničko ime</strong> (required)</label>
                        <input type="text"/>
                        <label><strong>Lozinka</strong> (required)</label>
                        <input type="password"/>
                        <label><strong>Adresa i mjesto stanovanja</strong> (required)</label>
                        <input type="text"/>
                        <label><strong>Sa koliko cimera bi živjeli?</strong></label>

                        <div className={classes.CheckBox}>
                            <input type="checkbox" id="1" name="broj" value="1"/>
                            <label htmlFor="1">1</label>
                        </div>
                        <div className={classes.CheckBox}>
                            <input type="checkbox" id="2" name="broj" value="2"/>
                            <label htmlFor="2">2</label>
                        </div>
                        <div className={classes.CheckBox}>
                            <input type="checkbox" id="3" name="broj" value="3"/>
                            <label htmlFor="3">3</label>
                        </div>
                        <div className={classes.CheckBox}>
                            <input type="checkbox" id="4" name="broj" value="4"/>
                            <label htmlFor="4">4</label>
                        </div>
                        <div className={classes.CheckBox}>
                            <input type="checkbox" id="5" name="broj" value="5"/>
                            <label htmlFor="5">5</label>
                        </div>

                        <label><strong>Nešto više o vama</strong></label>
                        <textarea rows="8" cols="15"/><br/>

                        <button><strong>REGISTRUJ SE</strong></button>
                    </div>
                </div>
            </Main>
        </Layout>
    )
}

export default Registracija;
