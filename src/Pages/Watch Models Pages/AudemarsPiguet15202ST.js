import React from "react";
import '../Pages Stylesheets/WatchModels.css';
import WatchModels from "../../Components/WatchModels";
import RoyalOakST from '../../Assets/AP_15202ST.png';

function AP15202ST() {
    return (
        <main className="model-page-container">

            <WatchModels brand="Audemars Piguet" title="Royal Oak 39 Stainless Steel" reference="15202ST" case="Stainless Steel" bracelet="Stainless Steel" diameter="39 Millimeter" thickness="8 Millimeter" retail="25.850" value="" image={RoyalOakST}/>

        </main>
    );
}

export default AP15202ST;