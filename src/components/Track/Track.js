import React from 'react';
import './Track.css';

function Track(props) {
    const handleAddTrack = (event) => {
        props.addTrack(props.track);
    }

    const handleRemoveTrack = (event) => {
        props.removeTrack(props.track.id);
    }

    const addButton = () => {
        if (!props.isPlaylist) {
            return (<button onClick={handleAddTrack}>+</button>);
        } else {
            return (<button onClick={handleRemoveTrack}>-</button>);
        }
    }

    return (
        <div className='Track'>
            <div className='Track-info'>
                <h3>{props.track.song}</h3>
                <p>{props.track.artist} | {props.track.album}</p>
            </div>
            {addButton()}
        </div>
    );
}

export default Track;