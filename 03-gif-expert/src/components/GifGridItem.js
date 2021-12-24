export const GifGridItem = ({ title, url }) => {
  return (
    <div className={"card"}>
      <img alt={title} src={url} />
      <p>{title}</p>
    </div>
  );
};
