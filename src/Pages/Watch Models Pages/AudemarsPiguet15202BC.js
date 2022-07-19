import React from "react";
import '../Pages Stylesheets/WatchModels.css';
import WatchModels from "../../Components/WatchModels";
import RoyalOakWG from '../../Assets/AP_15202BC.png';

function AP15202BC() {
    return (
        <main className="model-page-container">

            <WatchModels brand="Audemars Piguet" title="Royal Oak 39 White Gold" reference="15202BC" case="White Gold" bracelet="White Gold" diameter="39 Millimeter" thickness="8 Millimeter" retail="69.000" value="" image={RoyalOakWG}/>

        </main>

    );
}

export default AP15202BC;