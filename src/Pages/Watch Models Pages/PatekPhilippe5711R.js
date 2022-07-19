import React from "react";
import '../Pages Stylesheets/WatchModels.css';
import WatchModels from "../../Components/WatchModels";
import NautilusRG from '../../Assets/PP_5711R.jpg';

function PP5711R() {
    return (
        <main className="model-page-container">

            <WatchModels brand="Patek Philippe" title="Nautilus 5711/1R" reference="5711/1R-001" case="Rose Gold" bracelet="Rose Gold" diameter="40 Millimeter" thickness="8.3 Millimeter" retail="51.000" value="" image={NautilusRG}/>

        </main>
    );
}

export default PP5711R;