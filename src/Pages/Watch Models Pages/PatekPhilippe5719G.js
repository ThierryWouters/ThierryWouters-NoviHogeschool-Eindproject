import React from "react";
import '../Pages Stylesheets/WatchModels.css';
import WatchModels from "../../Components/WatchModels";
import NautilusDiamonds from '../../Assets/PP_5719.jpg';

function PP5719G() {
    return (
        <main className="model-page-container">

            <WatchModels brand="Patek Philippe" title="Nautilus 5719/10G" reference="5719/10G-010" case="Diamond Set White Gold" bracelet="Diamond Set White Gold" diameter="40 Millimeter" thickness="8.7 Millimeter" retail="453.600" value="" image={NautilusDiamonds}/>

        </main>
    );
}

export default PP5719G;