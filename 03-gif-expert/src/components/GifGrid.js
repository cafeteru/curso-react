import { useFetchGifs } from "../hooks/UseFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  const { gifs, loading } = useFetchGifs(category);
  return (
    <>
      <h3>{category}</h3>
      {loading && <p>"Cargando..."</p>}
      <div className={"card-grid"}>
        {gifs.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
