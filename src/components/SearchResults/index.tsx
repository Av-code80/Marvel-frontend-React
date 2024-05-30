import React, { useEffect, useState } from 'react';
import { get } from '../../api';
import CharacterCard from '../CharacterCard';
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
  useEffect(() => {
    const fetchCharacters = async () => {
      if (query) {
        const response = await get('characters', {
          nameStartsWith: query,
          limit: 4,
        });
        const { results } = response.data.data;
        setCharacters(results);
      }
    };

    fetchCharacters();
  }, [query]);

  return (
    <div className='search-results'>
      {characters.map(character => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
};

export default SearchResults;
