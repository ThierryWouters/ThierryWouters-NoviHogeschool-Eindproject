import React from "react";
import '../Pages Stylesheets/WatchModels.css';
import WatchModels from "../../Components/WatchModels";
import Nautilus from '../../Assets/PP_5711:.jpg';
import GetWatchValue from "../../Components/ApiCall";

function PP5711A() {
    return (
        <main className="model-page-container">

            <WatchModels brand="Patek Philippe" title="Nautilus 5711/1A" reference="5711/1A-014" case="Stainless Steel" bracelet="Stainless Steel" diameter="40 Millimeter" thickness="8.3 Millimeter" retail="34.893" value={<GetWatchValue url='https://chrono.tonsmets.nl/patek-philippe/Nautilus-5711A'/>} image={Nautilus}/>

        </main>
    );
}

export default PP5711A;