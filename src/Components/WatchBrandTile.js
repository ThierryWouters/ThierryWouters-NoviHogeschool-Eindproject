import React from "react";
import './Components Stylesheets/WatchBrandTile.css';

function WatchBrandTile(props) {
        return (
            <div className="watch-brand-container">
                <img src={props.image} alt={props.title}/>
            </div>
        );
    }

export default WatchBrandTile;
