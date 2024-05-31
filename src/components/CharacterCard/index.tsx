import React from 'react';
import { Chip, ChipGroup, Size } from '@lumx/react';
import { Character } from '../../common/interface';
import './index.scss';

interface CharacterCardProps {
  character: Character
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character}) => {
  return (
    <div className='character-card'>
      <div className='character-thumbnail'>
        <img
          src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          alt={character.name}
        />
      </div>
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
