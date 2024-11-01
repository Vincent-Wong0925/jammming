import React from 'react';
import './Track.css';

function Track(props) {
    const addTrack = (event) => {
        props.addTrack(props.track);
    }

    return (
        <div className='Track'>
            <div className='Track-info'>
                <h3>{props.track.song}</h3>
                <p>{props.track.artist} | {props.track.album}</p>
            </div>
            <button onClick={addTrack}>+</button>
        </div>
    );
}

export default Track;