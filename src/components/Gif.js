import React from "react";
import './Gif.css'

import { Link } from "wouter";

export default function Gif({ title, id, url }) {
  return (
    <Link to={`/gif/${id}`} className="Gif">
      <h4>{title || "This GIF doesn't have a title :("}</h4>
      <img loading='lazy' src={url} alt={title} />
    </Link>
  );
}
