import React, { useEffect, useState } from 'react';
import { TextField, Theme } from '@lumx/react';
import { mdiMagnify } from '@lumx/icons';

interface SearchProps {
  onSearch: (query: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      onSearch(searchTerm);
    },400);
    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm, onSearch]);

  return (
    <div className='search-field'>
      <TextField
        theme={Theme.dark}
        placeholder='Search ...'
        value={searchTerm}
        icon={mdiMagnify}
        onChange={value => setSearchTerm(value)}
      />
    </div>
  );
};

export default Search;
