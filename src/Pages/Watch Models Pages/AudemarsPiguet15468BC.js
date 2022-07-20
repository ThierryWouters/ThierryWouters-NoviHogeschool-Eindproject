import React from "react";
import '../Pages Stylesheets/WatchModels.css';
import WatchModels from "../../Components/WatchModels";
import RoyalOakFrWg from '../../Assets/Audemars_Frosted_Rainbow.png';
import GetWatchValue from "../../Components/ApiCall";

function AP15468BC() {
    return (
        <main className="model-page-container">

            <WatchModels brand="Audemars Piguet" title="Royal Oak 37 Double Balance Wheel Frosted White Gold" reference="15468BC" case="Frosted White Gold" bracelet="Frosted White Gold" diameter="37 Millimeter" thickness="10 Millimeter" retail="117.600" value={<GetWatchValue url='https://chrono.tonsmets.nl/audemars-piguet/royal-oak-double-balance-wheel-frosted-white-gold'/>} image={RoyalOakFrWg}/>

        </main>
    );
}

export default AP15468BC;