import { useState } from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../Layout/Header';
import HomePage from '../Pages/HomePage';

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
          <HomePage query={query} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
