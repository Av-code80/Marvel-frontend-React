import React from 'react';
import { AspectRatio, Chip, ChipGroup, Size, Thumbnail } from '@lumx/react';
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
      <Thumbnail
        image={`${character.thumbnail.path}.${character.thumbnail.extension}`}
        alt={character.name}
        aspectRatio={AspectRatio.horizontal}
        className='character-thumbnail'
      />
      <div className='character-content'>
        <h3 className='character-title'>{character.name}</h3>
        <p className='character-description'>
          {character.description || 'No description available'}
        </p>
        <ChipGroup>
          <Chip size={Size.s}># comics: {character.comics.available}</Chip>
          <Chip size={Size.s}># series: {character.series.available}</Chip>
          <Chip size={Size.s}># stories: {character.stories.available}</Chip>
        </ChipGroup>
      </div>
    </div>
  );
};

export default CharacterCard;
