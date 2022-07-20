import React from "react";
import '../Pages Stylesheets/WatchModels.css';
import WatchModels from "../../Components/WatchModels";
import BlackBayBronze from '../../Assets/Tudor_Black_Bay_58_Bronze.png';
import GetWatchValue from "../../Components/ApiCall";

function T79012() {
    return (
        <main className="model-page-container">

            <WatchModels brand="Tudor" title="Black Bay Fifty-Eight Bronze" reference="M79012M-0001" case="Bronze" bracelet="Bronze" diameter="39 Millimeter" thickness="11.9 Millimeter" retail="4.625" value={<GetWatchValue url='https://chrono.tonsmets.nl/tudor/Black-Bay-Fifty-Eight-Bronze'/>} image={BlackBayBronze}/>

        </main>
    );
}

export default T79012;