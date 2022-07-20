import React from "react";
import '../Pages Stylesheets/WatchModels.css';
import WatchModels from "../../Components/WatchModels";
import Aquanaut from '../../Assets/PP_5167R.jpg';
import GetWatchValue from "../../Components/ApiCall";

function PP5167R() {
    return (
        <main className="model-page-container">

            <WatchModels brand="Patek Philippe" title="Aquanaut 5167R" reference="5167R-001" case="Rose Gold"
                         bracelet="Rubber" diameter="40.8 Millimeter" thickness="8.1 Millimeter" retail="34.500"
                         value={<GetWatchValue url='https://chrono.tonsmets.nl/patek-philippe/Aquanaut-5167R'/>} image={Aquanaut}/>

        </main>
    );
}

export default PP5167R;