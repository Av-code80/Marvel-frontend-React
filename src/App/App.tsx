import { lazy, useState, Suspense } from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../Layout/Header';

const HomePage = lazy(() => import('../Pages/HomePage'));

function App() {
  const [query, setQuery] = useState('');

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
  };

  return (
    <Router>
      <Header onSearch={handleSearch} />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path='/'>
              <HomePage query={query} />
            </Route>
          </Switch>
        </Suspense>
      </main>
    </Router>
  );
}

export default App;
