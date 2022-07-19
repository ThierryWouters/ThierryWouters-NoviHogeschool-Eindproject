import React from "react";
import './Components Stylesheets/BrandTypesTile.css';

function BrandTypesTile(props) {
    return (
        <div className="brand-type-container">
            <img src={props.image} alt={props.title}/>
            <h6>{props.title}</h6>
        </div>
    );
}

export default BrandTypesTile;