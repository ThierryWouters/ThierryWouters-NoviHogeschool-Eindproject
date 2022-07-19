import React from "react";
import './Components Stylesheets/WatchModelsTile.css';

function WatchModels(props) {
    return (
        <div className="model-type-container">
            <img src={props.image} alt={props.title}/>
            <h3>{props.brand}</h3>
            <h4>{props.title}</h4>
            <ul>
                <li>Reference Number: <b>{props.reference}</b></li>
                <li>Case Material: <b>{props.case}</b></li>
                <li>Bracelet Material: <b>{props.bracelet}</b></li>
                <li>Diameter: <b>{props.diameter}</b></li>
                <li>Case Thickness: <b>{props.thickness}</b></li>
                <br/>
                <li>Retail Price: <b>${props.retail}</b></li>
                <li>Today's Watch Value: <b>${props.value}</b></li>
            </ul>
        </div>
    );
}

export default WatchModels;