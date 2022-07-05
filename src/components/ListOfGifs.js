import Gif from "./Gif";
export default function ListOfGifs(props) {
  return (
    <div className="Gif-list">{(props.gifs.map((gif) =>
      <Gif key={gif.id}
        title={gif.title}
        url={gif.url}
        id={gif.id} />
    ))}
    </div>
  );
}

