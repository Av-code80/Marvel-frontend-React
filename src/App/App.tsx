import { lazy, useState, Suspense } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../Layout/Header';
import { FlexBox, ProgressCircular } from '@lumx/react';

const HomePage = lazy(() => import('../Pages/HomePage'));

function App() {
  const [query, setQuery] = useState('');

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
  };

  return (
    <Router>
      <Header onSearch={handleSearch} />
      <FlexBox as='main'>
        <Suspense fallback={<ProgressCircular />}>
          <Router>
            <Route path='/'>
              <HomePage query={query} />
            </Route>
          </Router>
        </Suspense>
      </FlexBox>
    </Router>
  );
}

export default App;
