import React, {useState} from "react";
import './Components Stylesheets/SliderShow.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel";

function SliderShow(props) {
    return (
        <div className="carousel-container">

            <Carousel infiniteLoop autoPlay interval="3000" transitionTime="500" showThumbs={false} showArrows={false}>

                <div className="image">
                    <img src={props.image1} alt="Watch image"/>
                </div>
                <div className="image">
                    <img src={props.image2} alt="Watch image"/>
                </div>
                <div className="image">
                    <img src={props.image3} alt="Watch image"/>
                </div>
                <div className="image">
                    <img src={props.image4} alt="Watch image"/>
                </div>
                <div className="image">
                    <img src={props.image5} alt="Watch image"/>
                </div>
            </Carousel>
        </div>
    );
}

export default SliderShow;

