import React from "react";
import Tracklist from "../Tracklist/Tracklist";

function Playlist(props) {
    return (
        <div className='Tracklist'>
            <form>
                <input type='text' />
                <Tracklist tracks={props.playlist} />
                <button type='submit'>Save to Spotify</button>
            </form>
        </div>
    );
}

export default Playlist;