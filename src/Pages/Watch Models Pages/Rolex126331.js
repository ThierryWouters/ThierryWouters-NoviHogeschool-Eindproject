import React from "react";
import '../Pages Stylesheets/WatchModels.css';
import WatchModels from "../../Components/WatchModels";
import Datejust from '../../Assets/Rolex_126331.png';
import GetWatchValue from "../../Components/ApiCall";

function R126331() {
    return (
        <main className="model-page-container">

            <WatchModels brand="Rolex" title="Datejust" reference="126331" case="Stainless Steel/Rose Gold" bracelet="Stainless Steel/Rose Gold" diameter="41 Millimeter" thickness="12 Millimeter" retail="15.500" value={<GetWatchValue url='https://chrono.tonsmets.nl/rolex/Datejust'/>} image={Datejust}/>

        </main>
    );
}

export default R126331;