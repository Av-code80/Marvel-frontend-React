import React, { useEffect, useState } from 'react';
import CharacterCard from '../CharacterCard';
import Pagination from '../Pagination';
import './index.scss';
import { Character } from '../../common/types/interface';
import useConcurrencyController from '../../common/hooks/useConcurrencyController';
import { fetchCharacters } from '../../api/charactersServices';

interface SearchQueryProps {
  query: string;
}

const SearchResults: React.FC<SearchQueryProps> = ({ query }) => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [totalResults, setTotalResults] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const getSignal = useConcurrencyController();

  useEffect(() => {
    const loadCharacters = async () => {
      const signal = getSignal();

      if (query) {
        const { results, total } = await fetchCharacters(
          query,
          currentPage,
          signal,
        );
        setCharacters(results);
        setTotalResults(total);
      } else {
        setCharacters([]);
        setTotalResults(0);
      }
    };

    loadCharacters();
  }, [query, currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <section className='search-results'>
      {characters.map(character => (
        <CharacterCard key={character.id} character={character} />
      ))}
      {totalResults > 4 && (
        <Pagination
          currentPage={currentPage}
          totalResults={totalResults}
          resultsPerPage={4}
          onPageChange={handlePageChange}
          theme={''}
        />
      )}
    </section>
  );
};

export default SearchResults;
