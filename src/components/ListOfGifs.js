import React, { useEffect, useState } from "react";
import Gif from "./Gif";
import getGifs from "../services/getgifs";
import '../App.css'
import './Gif.css'


export default function ListOfGifs({ params }) {
  const { keyword } = params;

  const [loading, setLoading] = useState(true);
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    setLoading(true)
    getGifs({ keyword: keyword })
      .then(res => {
        setGifs(res)
        setLoading(false);
      });
  }, [keyword])

  if (loading) return (
    <div className="spinner">
      <span></span>
      <span></span>
      <span></span>
    </div>)

  return (
    <div className="gif-list">{(gifs.map((gif) =>
      <Gif key={gif.id}
        title={gif.title}
        url={gif.url}
        id={gif.id} />
    ))}
    </div>)
}

