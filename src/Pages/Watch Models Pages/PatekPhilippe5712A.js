import React from "react";
import '../Pages Stylesheets/WatchModels.css';
import WatchModels from "../../Components/WatchModels";
import NautlusMoonPhase from '../../Assets/PP_5712.jpg';
import GetWatchValue from "../../Components/ApiCall";

function PP5712A() {
    return (
        <main className="model-page-container">

            <WatchModels brand="Patek Philippe" title="Nautilus 5712/1A" reference="5712/1A-001" case="Stainless Steel" bracelet="Stainless Steel" diameter="40 Millimeter" thickness="8.52 Millimeter" retail="31.700" value={<GetWatchValue url='https://chrono.tonsmets.nl/patek-philippe/Nautilus-5712A'/>} image={NautlusMoonPhase}/>

        </main>
    );
}

export default PP5712A;