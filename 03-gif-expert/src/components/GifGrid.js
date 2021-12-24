import { useEffect, useState } from "react";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  const [images, setImagess] = useState([]);
  // para controlar las llamadas
  useEffect(() => {
    getGifs();
  }, []);
  const getGifs = async () => {
    const url =
      "https://api.giphy.com/v1/gifs/search?api_key=fdh15pACu1hLoeptfRRbGOcEGJx6ex37&q=Bleach&limit=10";
    const response = await fetch(url);
    const { data } = await response.json();
    const gifs = data.map((gif) => {
      return {
        id: gif.id,
        title: gif.title,
        url: gif.images?.downsized_medium?.url,
      };
    });
    setImagess(gifs);
  };
  return (
    <div>
      <h3>{category}</h3>
      {images.map((img) => (
        <GifGridItem key={img.id} {...img} />
      ))}
    </div>
  );
};
