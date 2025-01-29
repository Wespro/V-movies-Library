import React from 'react';
import { FaSearch } from 'react-icons/fa';

const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className='search'>
      <div className=''>
        <FaSearch className=' w-6 h-6 text-gray-100 ' />
        <input
          className='pl-4'
          type='text'
          placeholder='Search and Enjoy'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Search;
