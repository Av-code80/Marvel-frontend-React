import React from 'react';
import { FlexBox, TextField, Theme } from '@lumx/react';
import { mdiMagnify } from '@lumx/icons';
import { useDebouncedSearch } from '../../common/hooks/useDebouncedSearch';
import './index.scss';

/**
 * Search component with debounced input for querying data
 */

interface SearchProps {
  onSearch: (query: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const { searchTerm, setSearchTerm } = useDebouncedSearch(onSearch);

  return (
    <FlexBox as='div' className='search-field'>
      <TextField
        id='search'
        theme={Theme.light}
        placeholder='Search ...'
        value={searchTerm}
        icon={mdiMagnify}
        onChange={value => setSearchTerm(value)}
        clearButtonProps={{ label: 'Clear' }}
      />
    </FlexBox>
  );
};

export default Search;
