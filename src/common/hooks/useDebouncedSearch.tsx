import { useEffect, useState } from 'react';

/**
 * Custom hook for handling debounced search input
 */
export const useDebouncedSearch = (
  onSearch: (query: string) => void,
  delay: number = 400,
) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [hasError, setHasError] = useState(false);
  useEffect(() => {
    const isValid = /^[A-Za-z]{3,}$/.test(searchTerm);
    setHasError(!isValid && searchTerm.length > 0);

    const delayDebounceFn = setTimeout(() => {
      onSearch(isValid ? searchTerm : '');
    }, delay);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm, onSearch, delay]);

  return { searchTerm, setSearchTerm, hasError };
};
