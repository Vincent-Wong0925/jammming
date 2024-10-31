import React from 'react';
import Tracklist from '../Tracklist/Tracklist';
import './SearchResults.css';

function SearchResults(props) {
    return (
        <div className='SearchResults'>
            <h2>Results</h2>
            <Tracklist tracks={props.results} />
        </div>
    );
}

export default SearchResults;