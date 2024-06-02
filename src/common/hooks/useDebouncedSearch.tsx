import { useEffect, useState } from 'react';

/**
 * Custom hook for handling debounced search input
 */

export const useDebouncedSearch = (
  onSearch: (query: string) => void,
  delay: number = 400,
) => {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      onSearch(searchTerm);
    }, delay);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm, onSearch, delay]);

  return { searchTerm, setSearchTerm};
};
