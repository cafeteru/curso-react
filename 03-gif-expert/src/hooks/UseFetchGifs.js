import { useEffect, useState } from "react";
import { getGifs } from "../helpers/GetGifs";

export const useFetchGifs = (category) => {
  const [state, setState] = useState({
    gifs: [],
    loading: true,
  });

  // useEffect -> para controlar las llamadas
  useEffect(() => {
    getGifs(category).then((res) => setState({ gifs: res, loading: false }));
  }, [category]);

  return state;
};
