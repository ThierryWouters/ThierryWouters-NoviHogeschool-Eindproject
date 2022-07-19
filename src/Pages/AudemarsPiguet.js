import React from "react";
import './Pages Stylesheets/AudemarsPiguet.css';
import {Link} from "react-router-dom";
import BrandTypesTile from "../Components/BrandTypesTile";
import RoyalOakFrWg from '../Assets/Audemars_Frosted_Rainbow.png';
import RoyalOakWG from '../Assets/AP_15202BC.png';
import RoyalOakST from '../Assets/AP_15202ST.png';
import RoyalOakCE from '../Assets/AP_Perpetual_Ceramic.png';
import RoyalOakRG from '../Assets/AP_15407OR.png';

function AudemarsPiguet() {
    return (
        <>
            <header className="audemars-piguet-page">
                <h4>Audemars Piguet Watches</h4>
            </header>

            <main className="audemars-piguet-page">
                <Link to="/15202BC">
                    <BrandTypesTile title="Royal Oak 39 White Gold" image={RoyalOakWG}/>
                </Link>

                <Link to="/26579CE">
                    <BrandTypesTile title="Royal Oak Perpetual Calendar Ceramic" image={RoyalOakCE}/>
                </Link>

                <Link to="/15202ST">
                    <BrandTypesTile title="Royal Oak 39 Stainless Steel" image={RoyalOakST}/>
                </Link>

                <Link to="/15407OR">
                    <BrandTypesTile title="Royal Oak Double Balance Wheel Rose Gold" image={RoyalOakRG}/>
                </Link>

                <Link to="/15468BC">
                    <BrandTypesTile title="Royal Oak 37 Double Balance Wheel Frosted White Gold" image={RoyalOakFrWg}/>
                </Link>
            </main>
        </>
    );
}

export default AudemarsPiguet;