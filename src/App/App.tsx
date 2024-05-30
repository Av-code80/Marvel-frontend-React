import React, { useState } from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../components/Header';
import SearchResults from '../components/SearchResults';

function App() {
  const [query, setQuery] = useState('');

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
  };

  return (
    <Router>
      <Header onSearch={handleSearch} />
      <Switch>
        <Route exact path='/'>
          <section className='lumx-spacing-padding-horizontal-huge'>
            <SearchResults query={query} />
          </section>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
