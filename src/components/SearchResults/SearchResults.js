import React, { useCallback } from 'react';
import Tracklist from '../Tracklist/Tracklist';
import './SearchResults.css';

function SearchResults(props) {
    return (
        <div className='SearchResults'>
            <h2>Results</h2>
            <Tracklist 
                tracks={props.results}
                addTrack={props.addTrack}
                isPlaylist={false} />
        </div>
    );
}

export default SearchResults;