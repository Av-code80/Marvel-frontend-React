import React, { useState } from 'react';
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
  const { searchTerm, setSearchTerm, hasError } = useDebouncedSearch(onSearch);

  const handleChange = (value: string) => {
    setSearchTerm(value);
  };

  return (
    <FlexBox
      as='div'
      className='search-field'
      role='search'
      aria-label='Search component'
    >
      <TextField
        id='search'
        theme={Theme.light}
        placeholder='Search ...'
        value={searchTerm}
        icon={mdiMagnify}
        onChange={handleChange}
        clearButtonProps={{ label: 'Clear' }}
        aria-label='Search'
        role='searchbox'
        hasError={hasError}
        helper={hasError && 'Type more than two letters and without number'}
      />
    </FlexBox>
  );
};

export default Search;
