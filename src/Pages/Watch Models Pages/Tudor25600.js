import React from "react";
import '../Pages Stylesheets/WatchModels.css';
import WatchModels from "../../Components/WatchModels";
import Pelagos from '../../Assets/Tudor_Pelagos.png';

function T25600() {
    return (
        <main className="model-page-container">

            <WatchModels brand="Tudor" title="Pelagos" reference="M25600TN-0001" case="Titanium/Stainless Steel" bracelet="Titanium" diameter="42 Millimeter" thickness="14.3 Milliemeter" retail="4.725" value="" image={Pelagos}/>

        </main>
    );
}

export default T25600;