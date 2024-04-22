function FilterItem({filter, setFilter, setSort}) {

    return (
        <div className="filter-container">
            <h2>Filter: </h2>
            <select value={filter} onChange={(event) => setFilter(event.target.value)}>
                <option value="All">All</option>
                <option value="Completed">Completed</option>
                <option value="Incomplete">Incomplete</option>
            </select>
            <div>
                <button onClick={() => setSort('Asc')}>
                    <span>Asc</span>
                </button>
                <button onClick={() => setSort('Desc')}>
                    <span>Desc</span>
                </button>
            </div>
        </div>
    )
}

export default FilterItem;