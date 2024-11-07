import React from "react";
import Tracklist from "../Tracklist/Tracklist";
import './Playlist.css';

function Playlist(props) {
    const changeName = (event) => {
        props.onNameChange(event.target.value);
    }

    const removeTrack = (idToRemove) => {
        props.removeTrack(idToRemove);
    }

    return (
        <div className='Playlist'>
            <input 
                type='text' 
                onChange={changeName} 
                placeholder='New Playlist' />
            <Tracklist 
                tracks={props.playlist}
                removeTrack={removeTrack}
                isPlaylist={true} />
            <button 
                className='save-playlist'
                onClick={props.onSave} >Save to Spotify</button>
        </div>
    );
}

export default Playlist;