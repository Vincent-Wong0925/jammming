import React from "react";
import Tracklist from "../Tracklist/Tracklist";
import './Playlist.css';

function Playlist(props) {
    const changeName = (event) => {
        props.onNameChange(event.target.value);
    }

    const addTrack = (track) => {
        props.addTrack(track);
    }

    const removeTrack = (idToRemove) => {
        props.removeTrack(idToRemove);
    }

    return (
        <div className='Playlist'>
            <form>
                <input 
                    type='text' 
                    onChange={changeName} 
                    placeholder='New Playlist' />
                <Tracklist 
                    tracks={props.playlist}
                    removeTrack={removeTrack}
                    isPlaylist={true} />
                <button type='submit'>Save to Spotify</button>
            </form>
        </div>
    );
}

export default Playlist;