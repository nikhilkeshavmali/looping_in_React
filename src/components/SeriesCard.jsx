const SeriesCard = (props) => {
  return (
    <li key={props.curElem.id}>
      <div>
        <img
          src={props.curElem.image_url}
          alt={props.curElem.name}
          width="40%"
          height="40%"
        />
      </div>
      <h2>Name:{props.curElem.name}</h2>
      <h3>Rating:{props.curElem.rating}</h3>
      <p>Summary:{props.curElem.description}</p>
      <p>Genre:{props.curElem.genre}</p>
      <p>Cast:{props.curElem.cast}</p>
      <a href={props.curElem.watch_url} target="_blank" rel="noreferrer">
        Watch Now
      </a>
    </li>
  );
};
export default SeriesCard;
