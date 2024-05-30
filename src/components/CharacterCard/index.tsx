import React from 'react';
import './index.scss';

interface CharacterCardProps {
  character: {
    id: number;
    name: string;
    description: string;
    thumbnail: { path: string; extension: string };
    comics: { available: number };
    series: { available: number };
    stories: { available: number };
  };
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  return (
    <div className='character-card'>
      <img
        src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
        alt={character.name}
      />
      <h3>{character.name}</h3>
      <p>{character.description || 'No description available'}</p>
      <p># comics: {character.comics.available}</p>
      <p># series: {character.series.available}</p>
      <p># stories: {character.stories.available}</p>
    </div>
  );
};

export default CharacterCard;
