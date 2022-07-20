import React from "react";
import '../Pages Stylesheets/WatchModels.css';
import WatchModels from "../../Components/WatchModels";
import OysterPerpetual from '../../Assets/Rolex_114300.png';
import GetWatchValue from "../../Components/ApiCall";

function R114300() {
    return (
        <main className="model-page-container">

            <WatchModels brand="Rolex" title="Oyster Perpetual" reference="114300" case="Stainless Steel" bracelet="Stainless Steel" diameter="39 Millimeter" thickness="11 Millimeter" retail="5.700" value={<GetWatchValue url='https://chrono.tonsmets.nl/rolex/Oyster-Perpetual'/>} image={OysterPerpetual}/>

        </main>
    );
}

export default R114300;