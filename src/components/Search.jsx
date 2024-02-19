import React from 'react';

export default function Search({ handleSearch }) {
    const handleChange = (e) => {
        handleSearch(e.target.value);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search..."
                onChange={handleChange}
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
}
