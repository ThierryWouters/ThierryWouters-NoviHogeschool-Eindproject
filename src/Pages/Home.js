import React from "react";
import './Pages Stylesheets/Home.css';
import Banner from '../Assets/World of Watches Banner 4.jpg';
import SliderShow from '../Components/SliderShow';

import Datejust from '../Assets/datejust rg.jpg';
import DayDate from '../Assets/Rolex-day-date-40-green.jpg';
import Daytona from '../Assets/daytona.jpg';
import Patek5712 from '../Assets/patek philippe 5712.jpg';
import Royal from '../Assets/tudor royal.jpg';
import Perpetual from '../Assets/oyster perpetual 2.jpg';
import Patek5711RG from '../Assets/patek philippe rg 2.jpg';
import TudorBlue from '../Assets/tudor blue 2.webp';
import AudemarsPiguet from '../Assets/ap 15202 2.jpg';
import DayDateSilver from '../Assets/day date silver.webp';

function Home() {
    return (
        <>
            <header className="home-page">

                <h4>World of Watches</h4>
            </header>

            <main className="home-page">

                <div className="tiles">
                    <section className="text-section">
                        <p>Welcome fellow watch enthusiast!</p>
                    </section>

                    <section className="image-section">
                        <SliderShow image1={Daytona} image2={Datejust} image3={Patek5712} image4={DayDate} image5={Royal}/>
                    </section>
                </div>

                <div className="tiles">
                    <section className="image-section">
                        <SliderShow image1={Perpetual} image2={Patek5711RG} image3={DayDateSilver} image4={TudorBlue} image5={AudemarsPiguet}/>
                    </section>

                    <section className="text-section">
                        <p>The watch industry changed over the past few years drastically, where many years ago a watch
                            was
                            purchased for its looks and mechanical craftsmanship. That's no longer just the case in
                            today's
                            world, nowadays watches are more likely to be seen and purchased as an investment.</p>

                        <p>World of Watches is here to combine those two things. We want to bring information about
                            appreciating and depreciating values in different watch models along with giving watch
                            enthusiasts the change to share their own masterpieces with each other.</p>
                    </section>
                </div>

            </main>

            <footer className="home-page">
                <img className="home-page" src={Banner} alt="World of Watches"/>
            </footer>
        </>
    );
}

export default Home;