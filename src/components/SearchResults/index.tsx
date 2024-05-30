import React, { useEffect, useState } from 'react';
import { get } from '../../api';
import CharacterCard from '../CharacterCard';
import Pagination from '../Pagination';
import './index.scss';

interface Character {
  id: number;
  name: string;
  description: string;
  thumbnail: { path: string; extension: string };
  comics: { available: number };
  series: { available: number };
  stories: { available: number };
}

interface SearchQueryProps {
  query: string;
}

const SearchResults: React.FC<SearchQueryProps> = ({ query }) => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [totalResults, setTotalResults] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchCharacters = async (query: string, page: number) => {
    try {
      const response = await get('characters', {
        nameStartsWith: query,
        limit: 4,
        offset: (page - 1) * 4,
      });
      const { results, total } = response.data.data;
      setCharacters(results);
      setTotalResults(total);
    } catch (error) {
      console.error('Error fetching characters:', error);
    }
  };

  useEffect(() => {
    if (query) {
      fetchCharacters(query, currentPage);
    } else {
      setCharacters([]);
      setTotalResults(0);
    }
  }, [query, currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className='search-results'>
      {characters.map(character => (
        <CharacterCard key={character.id} character={character} />
      ))}
      {totalResults > 4 && (
        <Pagination
          currentPage={currentPage}
          totalResults={totalResults}
          resultsPerPage={4}
          onPageChange={handlePageChange}
          theme={undefined}
        />
      )}
    </div>
  );
};

export default SearchResults;
