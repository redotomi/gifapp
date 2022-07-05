import { useState, useEffect, useContext } from 'react'
import getGifs from '../services/getgifs';
import GifsContext from '../context/GifContext';

export default function useGifs({ keyword } = { keyword: null }) {
  const [loading, setLoading] = useState(true);
  const { gifs, setGifs } = useContext(GifsContext);

  useEffect(() => {
    setLoading(true)
    const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'rickroll';
    getGifs({ keyword: keywordToUse })
      .then(res => {
        setGifs(res);
        setLoading(false);
        if (keyword) localStorage.setItem('lastKeyword', keyword);

      });
  }, [keyword, setGifs])

  return { loading, gifs }
}