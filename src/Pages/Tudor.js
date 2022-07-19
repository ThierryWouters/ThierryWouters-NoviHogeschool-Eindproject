import React from "react";
import './Pages Stylesheets/Tudor.css';
import {Link} from "react-router-dom";
import BrandTypesTile from "../Components/BrandTypesTile";
import BlackBayBronze from '../Assets/Tudor_Black_Bay_58_Bronze.png';
import BlackBay58 from '../Assets/Tudor_Black_Bay_58.png';
import Pelagos from '../Assets/Tudor_Pelagos.png';
import Royal from '../Assets/Tudor_Royal.png';
import BlackBay925 from '../Assets/tudor_Black_Bay_58_925.png';

function Tudor() {
    return (
        <>
            <header className="tudor-page">
                <h4>Tudor Watches</h4>
            </header>

            <main className="tudor-page">
                <Link to="/28600">
                    <BrandTypesTile title="Royal" image={Royal}/>
                </Link>

                <Link to="/79030">
                    <BrandTypesTile title="Black Bay Fifty-Eight" image={BlackBay58}/>
                </Link>

                <Link to="/79012">
                    <BrandTypesTile title="Black Bay Fifty-Eight Bronze" image={BlackBayBronze}/>
                </Link>

                <Link to="/25600">
                    <BrandTypesTile title="Pelagos" image={Pelagos}/>
                </Link>

                <Link to="/79010">
                    <BrandTypesTile title="Black Bay Fifty-Eight 925" image={BlackBay925}/>
                </Link>
            </main>
        </>
    );
}

export default Tudor;