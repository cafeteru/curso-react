export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=fdh15pACu1hLoeptfRRbGOcEGJx6ex37&q=${encodeURI(
    category
  )}&limit=10`;
  const response = await fetch(url);
  const { data } = await response.json();
  return data.map((gif) => {
    return {
      id: gif.id,
      title: gif.title,
      url: gif.images?.downsized_medium?.url,
    };
  });
};
