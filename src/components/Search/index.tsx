import React from 'react';
import { TextField, Theme } from '@lumx/react';
import { mdiMagnify } from '@lumx/icons';
import { useDebouncedSearch } from '../../common/hooks/useDebouncedSearch';
import './index.scss';

interface SearchProps {
  onSearch: (query: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const { searchTerm, setSearchTerm} = useDebouncedSearch(onSearch);

  return (
    <div className='search-field'>
      <TextField
        id='search'
        theme={Theme.light}
        placeholder='Search ...'
        value={searchTerm}
        icon={mdiMagnify}
        onChange={value => setSearchTerm(value)}
        clearButtonProps={{ label: 'Clear' }}
      />
    </div>
  );
};

export default Search;
