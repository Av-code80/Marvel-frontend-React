import React from 'react';
import { Chip, ChipGroup, Size } from '@lumx/react';
import { Character } from '../../common/types/interface';
import './index.scss';

interface CharacterCardProps {
  character: Character;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  return (
    <article
      className='character-card'
      role='region'
      aria-labelledby={`character-${character.id}`}
    >
      <div className='character-thumbnail'>
        <img
          src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          alt={`Thumbnail of ${character.name}`}
          loading='lazy'
        />
      </div>
      <div className='character-content'>
        <h3 id={`character-${character.id}`} className='character-title'>
          {character.name}
        </h3>
        <p className='character-description'>
          {character.description || 'No description available'}
        </p>
        <ChipGroup>
          <Chip size={Size.s}># comics: {character.comics.available}</Chip>
          <Chip size={Size.s}># series: {character.series.available}</Chip>
          <Chip size={Size.s}># stories: {character.stories.available}</Chip>
        </ChipGroup>
      </div>
    </article>
  );
};

export default CharacterCard;
