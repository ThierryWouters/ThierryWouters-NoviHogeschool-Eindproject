import React from "react";
import './Pages Stylesheets/Home.css';
import Banner from '../Assets/World of Watches Banner 4.jpg';

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


                </div>

                <div className="tiles">

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