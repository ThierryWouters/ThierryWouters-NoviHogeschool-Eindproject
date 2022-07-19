import React from "react";
import '../Pages Stylesheets/WatchModels.css';
import WatchModels from "../../Components/WatchModels";
import DayDate from '../../Assets/Rolex_228238.png';

function R228238() {
    return (
        <main className="model-page-container">

            <WatchModels brand="Rolex" title="Day-Date" reference="228238" case="Yellow Gold" bracelet="Yellow Gold" diameter="40 Millimeter" thickness="12 Millimeter" retail="36.550" value="" image={DayDate}/>

        </main>
    );
}

export default R228238;