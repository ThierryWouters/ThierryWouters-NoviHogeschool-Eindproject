import React from "react";
import '../Pages Stylesheets/WatchModels.css';
import WatchModels from "../../Components/WatchModels";
import Submariner from '../../Assets/Rolex_116610.jpg';
import GetWatchValue from "../../Components/ApiCall";

function R116610() {
    return (
        <main className="model-page-container">

            <WatchModels brand="Rolex" title="Submariner" reference="116610" case="Stainless Steel" bracelet="Stainless Steel" diameter="40 Millimeter" thickness="12.5 Millimeter" retail="9.150" value={<GetWatchValue url='https://chrono.tonsmets.nl/rolex/Submariner'/>} image={Submariner}/>

        </main>
    );
}

export default R116610;