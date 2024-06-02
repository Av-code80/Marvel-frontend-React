import React from 'react';
import {
  Alignment,
  Chip,
  ChipGroup,
  FlexBox,
  ImageBlock,
  Size,
  Text,
} from '@lumx/react';
import { Character } from '../../common/types/interface';
import './index.scss';

/**
 * CharacterCard component made based on design system:
 * @param {CharacterCardProps} props - Properties object
 * @param {Character} props.character - Character data to display
 */

interface CharacterCardProps {
  character: Character;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  return (
    <FlexBox
      as='article'
      hAlign={Alignment.center}
      className='character-card'
      role='region'
      aria-labelledby={`character-${character.id}`}
    >
      <ImageBlock
        className='character-thumbnail'
        image={`${character.thumbnail.path}.${character.thumbnail.extension}`}
        alt={`Thumbnail of ${character.name}`}
        loading='lazy'
      />
      <FlexBox as='div' className='character-content'>
        <Text
          as='h3'
          id={`character-${character.id}`}
          className='character-title'
        >
          {character.name}
        </Text>
        <Text as='p' className='character-description'>
          {character.description || 'No description available'}
        </Text>
        <ChipGroup>
          <Chip size={Size.s}>
            <span className='span'># comics:</span> {character.comics.available}
          </Chip>
          <Chip size={Size.s}>
            <span className='span'># series:</span> {character.series.available}
          </Chip>
          <Chip size={Size.s}>
            <span className='span'># stories:</span>{' '}
            {character.stories.available}
          </Chip>
        </ChipGroup>
      </FlexBox>
    </FlexBox>
  );
};

export default CharacterCard;
