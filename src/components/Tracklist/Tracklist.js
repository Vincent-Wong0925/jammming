import React from 'react';
import Track from '../Track/Track';

function Tracklist(props) {
    return (
        <div className='Tracklist'>
            {props.tracks.map((track) => {
                return <Track 
                            track={track}
                            key={track.id}
                            addTrack={props.addTrack}
                            removeTrack={props.removeTrack}
                            isPlaylist={props.isPlaylist} />;
            })}
        </div>
    );
}

export default Tracklist;