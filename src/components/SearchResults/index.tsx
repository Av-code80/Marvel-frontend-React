import React, { useEffect, useState } from 'react';
import CharacterCard from '../CharacterCard';
import Pagination from '../Pagination';
import { Character } from '../../common/types/interface';
import useConcurrencyController from '../../common/hooks/useConcurrencyController';
import { fetchCharacters } from '../../api/charactersServices';
import { Alignment, FlexBox } from '@lumx/react';
import './index.scss';

/**
 * Display character search results with pagination:
 * @param {SearchQueryProps} props - The properties object
 * @param {string} props.query - The search query string
 */

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
    <FlexBox
      as='section'
      orientation='vertical'
      vAlign={Alignment.spaceBetween}
      className='search-results'
    >
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
    </FlexBox>
  );
};

export default SearchResults;
