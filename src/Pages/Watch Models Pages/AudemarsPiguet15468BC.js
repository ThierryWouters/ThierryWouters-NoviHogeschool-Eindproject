import React from "react";
import '../Pages Stylesheets/WatchModels.css';
import WatchModels from "../../Components/WatchModels";
import RoyalOakFrWg from '../../Assets/Audemars_Frosted_Rainbow.png';

function AP15468BC() {
    return (
        <main className="model-page-container">

            <WatchModels brand="Audemars Piguet" title="Royal Oak 37 Double Balance Wheel Frosted White Gold" reference="15468BC" case="Frosted White Gold" bracelet="Frosted White Gold" diameter="37 Millimeter" thickness="10 Millimeter" retail="117.600" value="" image={RoyalOakFrWg}/>

        </main>
    );
}

export default AP15468BC;