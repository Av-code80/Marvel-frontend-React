import { useEffect, useState } from 'react';

export const useDebouncedSearch = (
  onSearch: (query: string) => void,
  delay: number = 400,
) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setError('Search term can not be empty');
      onSearch('')
      return;
    }
    setError(null);

    const delayDebounceFn = setTimeout(() => {
      onSearch(searchTerm);
    }, delay);
    
    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm, onSearch, delay]);

  return { searchTerm, setSearchTerm , error};
};
