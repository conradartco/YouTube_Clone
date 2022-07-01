import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = (props) => {

    const [searchQuery, setSearchQuery] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        let mySearchQuery = searchQuery.toLocaleLowerCase();
        console.log('SearchBar handleSubmit value: ', mySearchQuery);
        props.searchQueryData(mySearchQuery);
    }

    return (
        <form onSubmit={handleSubmit} className='search-form'>
            <div>
                <input type='str' value={searchQuery} placeholder='Search...' className='input-search' onChange={(event) => setSearchQuery(event.target.value)}/>
            </div>
            <div>
                <button className='button-search' type='submit'>GO!</button>
            </div>
        </form>
    )
}

export default SearchBar;