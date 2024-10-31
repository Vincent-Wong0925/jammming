import React from 'react';

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