import { useEffect, useState } from "react";

export const useFetch = (url) => {
  let initialState = {
    data: null,
    loading: true,
    error: null,
  };
  const [state, setState] = useState(initialState);

  useEffect(() => {
    setState({
      ...initialState,
      loading: true,
    });
    fetch(url)
      .then((resp) => resp.json())
      .then((data) =>
        setState({
          loading: false,
          error: null,
          data,
        })
      );
  }, [url]);

  return state;
};
