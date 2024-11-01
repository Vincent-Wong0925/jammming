import React from 'react';
import Tracklist from '../Tracklist/Tracklist';
import './SearchResults.css';

function SearchResults(props) {
    const addTrack = (track) => {
        props.addTrack(track);
    }

    return (
        <div className='SearchResults'>
            <h2>Results</h2>
            <Tracklist 
                tracks={props.results}
                addTrack={addTrack} />
        </div>
    );
}

export default SearchResults;