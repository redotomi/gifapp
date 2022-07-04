import './App.css';
import React from 'react';
import ListOfGifs from './components/ListOfGifs';
import Home from './pages/Home';


import { Link, Route } from 'wouter'

function App() {
  return (
    <div className="App">
      <section className='App-content'>
        {/* <Link to='/gif/messi'>Gifs de Messi</Link>
        <Link to='/gif/argentina'>Gifs de Argentina</Link>
        <Link to='/gif/boca+juniors'>Gifs de Boca Juniors</Link> */}
        <Route
          path='/search/:keyword'
          component={ListOfGifs} />
        <Route
          path='/'
          component={Home} />

      </section>
    </div>
  );
}

export default App;
