import React from 'react';
import './Searchbar.css';

function Searchbar() {
    return (
        <div className='Searchbar'>
            <form>
                <input type='text' />
                <button type='submit'>Search</button>
            </form>
        </div>
    );
}

export default Searchbar;