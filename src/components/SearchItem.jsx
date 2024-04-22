function SearchItem({search, setSearch}){
    return (
        <div className="search-container">
            <h2>Search:</h2>
            <input type="text" placeholder="Search your task..." value={search} onChange={(event) => setSearch(event.target.value)}></input>
        </div>
    )
}

export default SearchItem;