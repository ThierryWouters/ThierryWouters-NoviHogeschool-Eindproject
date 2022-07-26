import React from "react";
import '../Pages Stylesheets/WatchModels.css';
import WatchModels from "../../Components/WatchModels";
import Daytona from '../../Assets/Rolex_116500.png';
import GetWatchValue from "../../Components/ApiCall";

function R116500() {
    return (
        <main className="model-page-container">

            <WatchModels brand="Rolex" title="Daytona" reference="116500" case="Stainless Steel" bracelet="Stainless Steel" diameter="40 Millimeter" thickness="12.5 Millimeter" retail="13.150" value={<GetWatchValue url='https://chrono.tonsmets.nl/rolex/Daytona'/>} image={Daytona}/>

        </main>
    );
}

export default R116500;