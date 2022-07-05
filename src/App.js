import './App.css';
import React from 'react';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import Detail from './pages/Detail/Detail';
import StaticContext from './context/StaticContext';
import { GifsContextProvider } from './context/GifContext';

import { Link, Route } from 'wouter'

function App() {
  return (
    <StaticContext.Provider value={{
      name: 'con provider',
      provider: true
    }}>
      <div className="App">
        <div className="title-container">
          <Link to="/" className="title">GIFApp</Link>
        </div>
        <GifsContextProvider>
          <section className='App-content'>
            <Route
              path='/search/:keyword'
              component={SearchResults} />
            <Route
              path='/'
              component={Home} />
            <Route
              path='/gif/:id'
              component={Detail} />
          </section>
        </GifsContextProvider>
      </div>
    </StaticContext.Provider>
  );
}

export default App;
