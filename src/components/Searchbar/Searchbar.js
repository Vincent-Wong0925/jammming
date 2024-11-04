import React from 'react';
import { useState } from 'react';
import './Searchbar.css';

function Searchbar(props) {
    const [term, setTerm] = useState('');

    const handleTermChange = (event) => {
        setTerm(event.target.value);
    }

    const search = (event) => {
        props.search(term);
    }

    return (
        <div className='Searchbar'>
            <form>
                <input type='text' onChange={handleTermChange} placeholder='Enter the name of the song...' />
                <button type='submit' onClick={search}>Search</button>
            </form>
        </div>
    );
}

export default Searchbar;