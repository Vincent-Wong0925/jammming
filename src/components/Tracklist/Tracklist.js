import React from 'react';
import Track from '../Track/Track';

function Tracklist(props) {
    const addTrack = (track) => {
        props.addTrack(track);
    }

    return (
        <div className='Tracklist'>
            {props.tracks.map((track) => {
                return <Track track={track} addTrack={addTrack} />;
            })}
        </div>
    );
}

export default Tracklist;