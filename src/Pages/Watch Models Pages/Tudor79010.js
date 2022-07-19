import React from "react";
import '../Pages Stylesheets/WatchModels.css';
import WatchModels from "../../Components/WatchModels";
import BlackBay925 from '../../Assets/tudor_Black_Bay_58_925.png';

function T79010() {
    return (
        <main className="model-page-container">

            <WatchModels brand="Tudor" title="Black Bay Fifty-Eight 925" reference="M79010SG-0001" case="Silver" bracelet="Leather" diameter="39 Millimeter" thickness="11.9 Millimeter" retail="4.400" value="" image={BlackBay925}/>

        </main>
    );
}

export default T79010;