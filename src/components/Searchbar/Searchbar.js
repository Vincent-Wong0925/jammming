import React from 'react';
import { useState } from 'react';
import './Searchbar.css';

function Searchbar() {
    const [term, setTerm] = useState('');

    const handleTermChange = (event) => {
        setTerm(event.target.value);
    }

    return (
        <div className='Searchbar'>
            <form>
                <input type='text' onChange={handleTermChange} placeholder='Enter the name of the song...' />
                <button type='submit'>Search</button>
            </form>
        </div>
    );
}

export default Searchbar;