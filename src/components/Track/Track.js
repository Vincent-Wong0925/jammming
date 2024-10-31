import React from 'react';

function Track(props) {
    return (
        <div className='Track'>
            <div className='Track-info'>
                <h3>{props.track.song}</h3>
                <p>{props.track.artist} | {props.track.album}</p>
            </div>
            <button>+</button>
        </div>
    );
}

export default Track;