import React, { useState } from 'react';

const SearchBar = (props) => {

    const [searchQuery, setSearchQuery] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        let mySearchQuery = searchQuery.toLocaleLowerCase();
        console.log('SearchBar handleSubmit value: ', mySearchQuery);
        props.searchQueryData(mySearchQuery);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input type='str' value={searchQuery} placeholder='Search...' onChange={(event) => setSearchQuery(event.target.value)}/>
            </div>
            <div>
                <button type='submit'></button>
            </div>
        </form>
    )
}

export default SearchBar;