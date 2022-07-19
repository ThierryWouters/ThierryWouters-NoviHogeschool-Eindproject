import React from "react";
import '../Pages Stylesheets/WatchModels.css';
import WatchModels from "../../Components/WatchModels";
import Royal from '../../Assets/Tudor_Royal.png';

function T28600() {
    return (
        <main className="model-page-container">

            <WatchModels brand="Tudor" title="Royal" reference="M28600-0005" case="Stainless Steel" bracelet="Stainless Steel" diameter="41 Millimeter" thickness="10.5 Millimeter" retail="2.375" value="" image={Royal}/>

        </main>
    );
}

export default T28600;