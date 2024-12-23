import React from "react";
import mp3 from '../assets/audio/donjon.mp3'
export const AudioMain = () => {
    const audioStyle: React.CSSProperties = {
        visibility: 'hidden',
        
    };
    return (
        <div>
        <audio src={mp3} style={audioStyle} autoPlay loop />
        </div>
    );
};