import React from "react";
import Tracklist from "../Tracklist/Tracklist";
import './Playlist.css';

function Playlist(props) {
    const changeName = (event) => {
        props.onNameChange(event.target.value);
    }

    return (
        <div className='Playlist'>
            <form>
                <input type='text' onChange={changeName} />
                <Tracklist tracks={props.playlist} />
                <button type='submit'>Save to Spotify</button>
            </form>
        </div>
    );
}

export default Playlist;