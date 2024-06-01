import React from 'react';
import SearchResults from '../../components/SearchResults';
import './index.scss';

interface HomePageProps {
  query: string;
}

const HomePage: React.FC<HomePageProps> = ({ query }) => {
  return (
    <section className='lumx-spacing-padding-horizontal-huge home-page'>
      {!query && <h2 className='query'>Type your favorite character ↗️</h2>}
      <SearchResults query={query} />
    </section>
  );
};

export default HomePage;
