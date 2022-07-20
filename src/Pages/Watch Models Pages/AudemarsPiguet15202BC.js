import React from "react";
import '../Pages Stylesheets/WatchModels.css';
import WatchModels from "../../Components/WatchModels";
import GetWatchValue from "../../Components/ApiCall";
import RoyalOakWG from '../../Assets/AP_15202BC.png';

function AP15202BC() {
    return (
        <main className="model-page-container">

            <WatchModels brand="Audemars Piguet" title="Royal Oak 39 White Gold" reference="15202BC" case="White Gold" bracelet="White Gold" diameter="39 Millimeter" thickness="8 Millimeter" retail="69.000" value={<GetWatchValue url='https://chrono.tonsmets.nl/audemars-piguet/royal-oak-39-white-gold'/>} image={RoyalOakWG}/>

        </main>

    );
}

export default AP15202BC;