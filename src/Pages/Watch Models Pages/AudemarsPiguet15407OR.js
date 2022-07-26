import React from "react";
import '../Pages Stylesheets/WatchModels.css';
import WatchModels from "../../Components/WatchModels";
import RoyalOakRG from '../../Assets/AP_15407OR.png';
import GetWatchValue from "../../Components/ApiCall";

function AP15407OR() {
    return (
        <main className="model-page-container">

            <WatchModels brand="Audemars Piguet" title="Royal Oak Double Balance Wheel Rose Gold" reference="15407OR" case="Rose Gold" bracelet="Rose Gold" diameter="41 Millimeter" thickness="9.9 Millimeter" retail="91.125" value={<GetWatchValue url='https://chrono.tonsmets.nl/audemars-piguet/royal-oak-double-balance-wheel-rose-gold'/>} image={RoyalOakRG}/>

        </main>
    );
}

export default AP15407OR;