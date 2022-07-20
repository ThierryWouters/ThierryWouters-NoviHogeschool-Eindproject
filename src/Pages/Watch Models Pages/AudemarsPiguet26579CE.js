import React from "react";
import '../Pages Stylesheets/WatchModels.css';
import WatchModels from "../../Components/WatchModels";
import RoyalOakCE from '../../Assets/AP_Perpetual_Ceramic.png';
import GetWatchValue from "../../Components/ApiCall";

function AP26579CB() {
    return (
        <main className="model-page-container">

            <WatchModels brand="Audemars Piguet" title="Royal Oak Perpetual Calendar Ceramic" reference="26579CE" case="Black Ceramic" bracelet="Black Ceramic" diameter="41 Millimeter" thickness="9.5 Millimeter" retail="102.800" value={<GetWatchValue url='https://chrono.tonsmets.nl/audemars-piguet/royal-oak-perpetual-calendar-ceramic'/>} image={RoyalOakCE}/>

        </main>
    );
}

export default AP26579CB;