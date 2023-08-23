import React, { useState } from 'react';

const SearchInput = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
    // Call the onSearch prop with the updated search text
    onSearch(event.target.value);
  };

  return (
    <div className="search-input">
      <input
        type="text"
        placeholder="Search restaurants..."
        value={searchText}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default SearchInput;
