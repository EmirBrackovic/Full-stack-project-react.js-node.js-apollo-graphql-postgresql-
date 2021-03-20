import React, {useState} from "react";
import classes from './Index.css';
import Layout from "../../components/Layout/Layout";
import Misljenje from "../../components/Misljenje/Misljenje";

const Index = (props) => {
    const [misljenja, setMisljenja] = useState([
        {
            id: 1,
            tekst: "Mnogo sam se mučio kako bih našao osobu sa kojom bih " +
                      "dijelio troškove stanovanja, ali mi je ova stranica taj " +
                      "postupak mnogo olakšala. Preko ove stranice našao sam 2 nova " +
                      "dobra prijatelja vjerovatno i za cijeli život i sa njima trenutno " +
                      "živim u blizini Kampusa",
            autor: "Miralem Pjanić",
            biografija: "student Elektrotehničkog fakuleta u Sarajevu" },
        {
            id: 2,
            tekst: "Stvarno mi se sviđa ovaj način pronalaženja novih cimera! Prije sam " +
                "stavljao oglase na svom Facebook profilu, ali to nije puno pomagalo. " +
                "Ovo mjesto je spojilo puno ljudi koji imaju isti problem kao i ja i to " +
                "mi mnogo olakšava proces pronalaska cimera!",
            autor: "Emir Kovačević",
            biografija: "student Prirodno-matematičkog fakulteta u Sarajevu" }
    ]);

    let sva_misljenja = misljenja.map((misljenje) => {
        return <Misljenje oglas={misljenje}/>
    })
    return (
        <Layout>
            <div className={classes.Main}>
                <div className={classes.Friends}>
                    <p>Ako imate stan koji iznajmljujete ili tražite stan i treba vam neko da
                        bi s njim podijelili troškove stanovanja, na pravom ste mjestu !</p>
                    <button className={classes.Prijava}><strong>PRIJAVI SE</strong></button>
                </div>
                <div className={classes.Misljenja}>
                    <h1>Šta korisnici naših usluga kažu o nama?</h1>
                    <div className={classes.ListaMisljenja}>
                        {sva_misljenja}
                    </div>
                </div>
                <div className={classes.Studenti}>

                </div>
                <div className={classes.Footer}>
                    <div>
                        <p className={classes.Pitanje}><strong>Još se niste registrovali ?</strong></p>
                    </div>
                    <div className={classes.Registracija}>
                        <p>Pridružite se našoj zajednici i upoznajte nove ljude koji bi Vam mogli biti
                            potencijalni cimeri. Objavljujte na našoj stranici oglase i nađite ono
                            što Vam treba !</p>
                        <button><strong>REGISTRUJ SE</strong></button>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Index;
