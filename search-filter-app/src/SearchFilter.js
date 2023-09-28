import React, { useState } from "react";
import data from "./data.json";
import "./index.css"; // Import the CSS file for styling

const SearchFilter = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
    performSearch(event.target.value);
  };

  const performSearch = (query) => {
    // Filter the data based on the search query
    const filteredResults = data.filter((record) => {
      const { name, email } = record;
      const lowerCaseQuery = query.toLowerCase();
      return (
        name.toLowerCase().includes(lowerCaseQuery) ||
        email.toLowerCase().includes(lowerCaseQuery)
      );
    });

    setResults(filteredResults);
  };

  return (
    <div className="search-filter-container">
      <input
        type="text"
        placeholder="Search..."
        className="search-input"
        value={searchQuery}
        onChange={handleSearchInputChange}
      />

      <div className="search-results">
        {/* Display search results */}
        {results.length === 0 ? (
          <p>No results found.</p>
        ) : (
          results.map((record) => (
            <div key={record.id} className="search-result">
              <p className="result-name">{record.name}</p>
              <p className="result-email">{record.email}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SearchFilter;
