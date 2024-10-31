import React from "react";
import Tracklist from "../Tracklist/Tracklist";
import './Playlist.css';

function Playlist(props) {
    return (
        <div className='Playlist'>
            <form>
                <input type='text' />
                <Tracklist tracks={props.playlist} />
                <button type='submit'>Save to Spotify</button>
            </form>
        </div>
    );
}

export default Playlist;