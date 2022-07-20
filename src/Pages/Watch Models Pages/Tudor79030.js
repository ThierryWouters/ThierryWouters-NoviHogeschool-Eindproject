import React from "react";
import '../Pages Stylesheets/WatchModels.css';
import WatchModels from "../../Components/WatchModels";
import BlackBay58 from '../../Assets/Tudor_Black_Bay_58.png';
import GetWatchValue from "../../Components/ApiCall";

function T79030() {
    return (
        <main className="model-page-container">

            <WatchModels brand="Tudor" title="Black Bay Fifty-Eight" reference="M79030B-0001" case="Stainless Steel" bracelet="Stainless Steel" diameter="39 Millimeter" thickness="11.9 Millimeter" retail="3.800" value={<GetWatchValue url='https://chrono.tonsmets.nl/tudor/Black-Bay-Fifty-Eight'/>} image={BlackBay58}/>

        </main>
    );
}

export default T79030;