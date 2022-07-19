import React from "react";
import './Pages Stylesheets/Rolex.css';
import {Link} from "react-router-dom";
import BrandTypesTile from "../Components/BrandTypesTile";
import Datejust from '../Assets/Rolex_126331.png';
import DayDate from '../Assets/Rolex_228238.png';
import OysterPerpetual from '../Assets/Rolex_114300.png';
import Submariner from '../Assets/Rolex_116610.jpg';
import Daytona from '../Assets/Rolex_116500.png';


function Rolex() {
    return (
        <>
            <header className='rolex-page'>
                <h4 className="rolex-title">Rolex Watches</h4>
            </header>

            <main className='rolex-page'>
                <Link to="/116500">
                    <BrandTypesTile title="Daytona" image={Daytona}/>
                </Link>

                <Link to="/126331">
                    <BrandTypesTile title="Datejust" image={Datejust}/>
                </Link>

                <Link to="/228238">
                    <BrandTypesTile title="Day-Date" image={DayDate}/>
                </Link>

                <Link to="/114300">
                    <BrandTypesTile title="Oyster Perpetual" image={OysterPerpetual}/>
                </Link>

                <Link to="/116610">
                    <BrandTypesTile title="Submariner" image={Submariner}/>
                </Link>
            </main>
        </>
    );
}

export default Rolex;