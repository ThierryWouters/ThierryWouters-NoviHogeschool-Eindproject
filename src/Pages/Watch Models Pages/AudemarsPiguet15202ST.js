import React from "react";
import '../Pages Stylesheets/WatchModels.css';
import WatchModels from "../../Components/WatchModels";
import RoyalOakST from '../../Assets/AP_15202ST.png';
import GetWatchValue from "../../Components/ApiCall";

function AP15202ST() {
    return (
        <main className="model-page-container">

            <WatchModels brand="Audemars Piguet" title="Royal Oak 39 Stainless Steel" reference="15202ST" case="Stainless Steel" bracelet="Stainless Steel" diameter="39 Millimeter" thickness="8 Millimeter" retail="25.850" value={<GetWatchValue url='https://chrono.tonsmets.nl/audemars-piguet/royal-oak-39-stainless-steel'/>} image={RoyalOakST}/>

        </main>
    );
}

export default AP15202ST;