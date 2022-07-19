import React from "react";
import {Switch, Route} from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import WatchBrands from "./Pages/WatchBrands";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import AudemarsPiguet from "./Pages/AudemarsPiguet";
import Rolex from "./Pages/Rolex";
import PatekPhilippe from "./Pages/PatekPhilippe";
import Tudor from "./Pages/Tudor";
import Gallery from "./Pages/Gallery";
import AP15202BC from "./Pages/Watch Models Pages/AudemarsPiguet15202BC";
import AP15202ST from "./Pages/Watch Models Pages/AudemarsPiguet15202ST";
import AP15407OR from "./Pages/Watch Models Pages/AudemarsPiguet15407OR";
import AP15468BC from "./Pages/Watch Models Pages/AudemarsPiguet15468BC";
import AP26579CB from "./Pages/Watch Models Pages/AudemarsPiguet26579CE";
import PP5167R from "./Pages/Watch Models Pages/PatekPhilippe5167R";
import PP5711A from "./Pages/Watch Models Pages/PatekPhilippe5711A";
import PP5711R from "./Pages/Watch Models Pages/PatekPhilippe5711R";
import PP5712A from "./Pages/Watch Models Pages/PatekPhilippe5712A";
import PP5719G from "./Pages/Watch Models Pages/PatekPhilippe5719G";
import R114300 from "./Pages/Watch Models Pages/Rolex114300";
import R116500 from "./Pages/Watch Models Pages/Rolex116500";
import R116610 from "./Pages/Watch Models Pages/Rolex116610";
import R126331 from "./Pages/Watch Models Pages/Rolex126331";
import R228238 from "./Pages/Watch Models Pages/Rolex228238";
import T25600 from "./Pages/Watch Models Pages/Tudor25600";
import T28600 from "./Pages/Watch Models Pages/Tudor28600";
import T79010 from "./Pages/Watch Models Pages/Tudor79010";
import T79012 from "./Pages/Watch Models Pages/Tudor79012";
import T79030 from "./Pages/Watch Models Pages/Tudor79030";
import './App.css';

function App() {
    console.log("Website loaded!")
    return (
        <>
            <NavBar/>

            <div className="content">
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route exact path="/watchbrands">
                        <WatchBrands/>
                    </Route>
                    <Route exact path="/signin">
                        <SignIn/>
                    </Route>
                    <Route exact path="/signup">
                        <SignUp/>
                    </Route>
                    <Route exact path="/audemarspiguet">
                        <AudemarsPiguet/>
                    </Route>
                    <Route exact path="/rolex">
                        <Rolex/>
                    </Route>
                    <Route exact path="/patekphilippe">
                        <PatekPhilippe/>
                    </Route>
                    <Route exact path="/tudor">
                        <Tudor/>
                    </Route>
                    <Route exact path="/gallery">
                        <Gallery/>
                    </Route>

                    <Route exact path="/15202BC">
                        <AP15202BC/>
                    </Route>
                    <Route exact path="/15202ST">
                        <AP15202ST/>
                    </Route>
                    <Route exact path="/15407OR">
                        <AP15407OR/>
                    </Route>
                    <Route exact path="/15468BC">
                        <AP15468BC/>
                    </Route>
                    <Route exact path="/26579CE">
                        <AP26579CB/>
                    </Route>

                    <Route exact path="/5167R">
                        <PP5167R/>
                    </Route>
                    <Route exact path="/5711A">
                        <PP5711A/>
                    </Route>
                    <Route exact path="/5711R">
                        <PP5711R/>
                    </Route>
                    <Route exact path="/5712A">
                        <PP5712A/>
                    </Route>
                    <Route exact path="/5719G">
                        <PP5719G/>
                    </Route>

                    <Route exact path="/114300">
                        <R114300/>
                    </Route>
                    <Route exact path="/116500">
                        <R116500/>
                    </Route>
                    <Route exact path="/116610">
                        <R116610/>
                    </Route>
                    <Route exact path="/126331">
                        <R126331/>
                    </Route>
                    <Route exact path="/228238">
                        <R228238/>
                    </Route>

                    <Route exact path="/25600">
                        <T25600/>
                    </Route>
                    <Route exact path="/28600">
                        <T28600/>
                    </Route>
                    <Route exact path="/79010">
                        <T79010/>
                    </Route>
                    <Route exact path="/79012">
                        <T79012/>
                    </Route>
                    <Route exact path="/79030">
                        <T79030/>
                    </Route>

                </Switch>
            </div>
        </>
    );
}

export default App;
