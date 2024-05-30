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
  <TextField
    theme={Theme.dark}
    placeholder='Search ...'
    value={searchTerm}
    icon={mdiMagnify}
    onChange={handleSearch}
    onKeyDown={handleKeyDown}
  />
);
  
};

export default Search;
