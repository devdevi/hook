import React from 'react'

const Search = ({search, searchInput, handleSearch}) => {

    return (
        <div>
        <p>Buscar</p>
        <input type="text" className="text" value={search} ref={searchInput} onChange={handleSearch}/>
    </div>
    )
}

export default Search