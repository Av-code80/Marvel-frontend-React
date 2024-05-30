import React, { useState } from 'react';
import { TextField, Theme } from '@lumx/react';
import { mdiMagnify } from '@lumx/icons';

interface SearchProps {
  onSearch: (query: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (value: string) => {
    setSearchTerm(value);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onSearch(searchTerm);
      console.log('e:', e);
      
    }
  };
return (
  <div className='search-field'>
    <TextField
      theme={Theme.dark}
      placeholder='Search ...'
      value={searchTerm}
      icon={mdiMagnify}
      onChange={(_, value: string) => handleSearch(value)}
      onKeyDown={handleKeyDown}
    />
  </div>
);
  
};

export default Search;
