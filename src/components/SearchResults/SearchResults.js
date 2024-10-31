import React from 'react';
import Tracklist from '../Tracklist/Tracklist';

function SearchResults(props) {
    return (
        <div className='SearchResults'>
            <Tracklist tracks={props.results} />
        </div>
    );
}

export default SearchResults;