import React from "react";
import './Pages Stylesheets/PatekPhilippe.css';
import {Link} from "react-router-dom";
import BrandTypesTile from "../Components/BrandTypesTile";
import NautilusDiamonds from '../Assets/PP_5719.jpg';
import Nautilus from '../Assets/PP_5711:.jpg';
import NautilusRG from '../Assets/PP_5711R.jpg';
import Aquanaut from '../Assets/PP_5167R.jpg';
import NautlusMoonPhase from '../Assets/PP_5712.jpg';

function PatekPhilippe() {
    return (
        <>
            <header className="patek-philippe-page">
                <h4>Patek Philippe Watches</h4>
            </header>

            <main className="patek-philippe-page">
                <Link to="/5711A">
                    <BrandTypesTile title="Nautilus 5711/1A" image={Nautilus}/>
                </Link>

                <Link to="/5167R">
                    <BrandTypesTile title="Aquanaut 5167R" image={Aquanaut}/>
                </Link>

                <Link to="/5719G">
                    <BrandTypesTile title="Nautilus 5719/10G" image={NautilusDiamonds}/>
                </Link>

                <Link to="/5711R">
                    <BrandTypesTile title="Nautilus 5711/1R" image={NautilusRG}/>
                </Link>

                <Link to="/5712A">
                    <BrandTypesTile title="Nautilus 5712/1A" image={NautlusMoonPhase}/>
                </Link>
            </main>
        </>
    );
}

export default PatekPhilippe;