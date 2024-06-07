import React from 'react';
import { FlexBox, Text } from '@lumx/react';
import SearchResults from '../../components/SearchResults';

interface HomePageProps {
  query: string;
}

const HomePage: React.FC<HomePageProps> = ({ query }) => {
  return (
    <FlexBox className='lumx-spacing-padding-horizontal-huge home-page'>
      {!query && (
        <Text as='h3' color='red' className='homepage-text'>
          Type your favorite Superhero ↗️
        </Text>
      )}
      <SearchResults query={query} />
    </FlexBox>
  );
};

export default HomePage;
