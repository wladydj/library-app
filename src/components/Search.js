import React, { useState } from 'react';

const Search = () => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // onSearch(query);
  };

  return (
    <>
    <div className="divider"></div>
    <div className='search'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={query}
          onChange={handleInputChange}
          placeholder='Buscar por nombre, autor ó ISBN'
          />
          <button type='submit'>Buscar</button>
      </form>
    </div>
    </>
  );
};

export default Search;