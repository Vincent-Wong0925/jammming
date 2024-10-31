import React from "react";
import Tracklist from "../Tracklist/Tracklist";

function Playlist(props) {
    return (
        <div className='Tracklist'>
            <input type='text' />
            <Tracklist tracks={props.playlist} />
            <button type='submit'>Save to Spotify</button> 
        </div>
    );
}

export default Playlist;