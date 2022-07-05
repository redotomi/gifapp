import React, { useState } from "react";
import { Link, useLocation } from "wouter";
import './Home.css'
import useGifs from "../../hooks/useGifs";
import ListOfGifs from "../../components/ListOfGifs";
import Spinner from "../../components/Spinner";


const popularGifs = ['Matrix', 'Messi', 'Cats', 'Programming'];

export default function Home() {
  const [keyword, setKeyword] = useState('');
  const [path, pushLocation] = useLocation()
  const { loading, gifs } = useGifs()

  const handleSubmit = ev => {
    ev.preventDefault();
    pushLocation(`/search/${keyword}`)
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
        {popularGifs.map((gif) => (
          <li className="popular-gif" key={gif}>
            <Link className="gif-of" to={`/search/${gif}`}>
              GIFS of {gif}
            </Link>
          </li>
        ))}
      </ul>
      <div>
        <h4 className="App-title">Last search</h4>
        {loading ? <Spinner /> : <ListOfGifs gifs={gifs} />}
      </div>
    </>
  );
}
