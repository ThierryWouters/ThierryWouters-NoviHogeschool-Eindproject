import React, {useState} from "react";
import WatchVideo from '../Assets/Watches Movie Final.mp4';
import '../Components/Components Stylesheets/VideoPlayer.css';

import Speaker from '../Assets/speaker-icon.png'

function VideoPlayer() {

    const [isMuted, setMuted] = useState({
        muted: true
    });
    const {muted} = isMuted
    const handleMuteSetter = () => {
        setMuted({...isMuted, muted: !isMuted.muted});
    }

    return (
        <div className="video-player">
            <div className="controls">
                <video className="video" autoPlay loop muted={muted}>
                    <source src={WatchVideo} type="video/mp4"/>
                </video>

                <input type="image" src={Speaker} className="mute-control" onClick={handleMuteSetter}/>
            </div>
        </div>
    );
}

export default VideoPlayer