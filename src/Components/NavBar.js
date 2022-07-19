import React, {useContext} from "react";
import {useHistory, Link} from "react-router-dom";
import {AuthContext} from "../Context/AuthContext";
import './Components Stylesheets/NavBar.css';

import logo from '../Assets/Chrono_Logo.png';

function NavBar() {
    const {isAuth, login, logout} = useContext(AuthContext);
    const history = useHistory();

    return (
        <nav>
            <Link to="/">
                <span className="logo-container">
                    <img src={logo} alt="Chrono Worth Logo"/>
                    <h5>
                    Home
                    </h5>
                </span>
            </Link>

            <Link to="/watchbrands">
                <h5 className="link-page">
                    Watch Brands
                </h5>
            </Link>

            <Link to="/gallery">
                <h5 className="link-page">
                    Gallery
                </h5>
            </Link>

            <div>
                {!isAuth ?
                <>
                <button type="button"
                        onClick={login}>
                    Sign in
                </button>
                <button type="button"
                        onClick={() => history.push("/signup")}>
                    Sign up
                </button>
                </>
                    :
                    <>
                    <button type="button"
                            onClick={logout}>
                        Sign out
                    </button>
                    </>
                }
            </div>
        </nav>
    );
}

export default NavBar;