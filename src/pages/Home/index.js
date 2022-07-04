import React, { useState } from "react";
import { Link, useLocation } from "wouter";
import './PopularGif.css'
import './Input.css'

const porpularGifs = ['Matrix', 'Messi', 'Cats', 'Programming'];

export default function Home() {
  const [keyword, setKeyword] = useState('');
  const [path, pushLocation] = useLocation()

  const handleSubmit = ev => {
    ev.preventDefault();
    // otra ruta
    pushLocation(`/search/${keyword}`)
    console.log(keyword);
  }
  const handleChange = ev => {
    setKeyword(ev.target.value);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input className="Input" placeholder="Search..." onChange={handleChange} type='text' value={keyword} />
      </form>
      <h2 className="App-title">Most popular GIFS</h2>
      <ul >
        {porpularGifs.map((gif) => (
          <li className="popular-gif" key={gif}>
            <Link className="gif-of" to={`/search/${gif}`}>
              GIFS of {gif}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
