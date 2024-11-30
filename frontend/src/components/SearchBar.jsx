// SearchBar.js
import React from "react";

const SearchBar = ({ onSearch }) => {
    const handleChange = (e) => {
        onSearch(e.target.value); // Call the onSearch function with the input value
    };

    return (
        <input
            type="text"
            onChange={handleChange}
            placeholder="Search for projects..."
        />
    );
};

export default SearchBar;

