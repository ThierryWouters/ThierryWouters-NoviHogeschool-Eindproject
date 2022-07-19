import React from "react";
import {Link} from "react-router-dom";
import WatchBrandTile from "../Components/WatchBrandTile";
import './Pages Stylesheets/WatchBrands.css';

import AudemarsPiguetLogo from '../Assets/Audemars_Piguet_Logo.webp';
import PatekPhilippeLogo from '../Assets/Patek_Philippe_Logo.png';
import RolexLogo from '../Assets/Rolex_Logo.png';
import TudorLogo from '../Assets/Tudor_Logo.png';


function WatchBrands() {
    return (
        <>
            <header className="watch-brands-page">
                <h4>Watch Brands</h4>
            </header>

            <main className="watch-brands-page">
                <Link to="/audemarspiguet">
                    <WatchBrandTile title="Audemars Piguet" image={AudemarsPiguetLogo}/>
                </Link>

                <Link to="/patekphilippe">
                    <WatchBrandTile title="Patek Philippe" image={PatekPhilippeLogo}/>
                </Link>

                <Link to="/rolex">
                    <WatchBrandTile title="Rolex" image={RolexLogo}/>
                </Link>

                <Link to="/tudor">
                    <WatchBrandTile title="Tudor" image={TudorLogo}/>
                </Link>
            </main>
        </>
    );
}

export default WatchBrands;