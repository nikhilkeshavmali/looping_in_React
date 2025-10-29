import seriesData from "../api/SeriesData.json";
import React from "react";
const NetflixSeries = () => {
  return (
    <ul>
      {seriesData.map((curElem) => {
        return (
          <li key={curElem.id}>
            <div>
              <img
                src={curElem.image_url}
                alt={curElem.name}
                width="40%"
                height="40%"
              />
            </div>
            <h2>Name:{curElem.name}</h2>
            <h3>Rating:{curElem.rating}</h3>
            <p>Summary:{curElem.description}</p>
            <p>Genre:{curElem.genre}</p>
            <p>Cast:{curElem.cast}</p>
            <a href={curElem.watch_url} target="_blank" rel="noreferrer">
              Watch Now
            </a>
          </li>
        );
      })}
    </ul>
  );
};
export default NetflixSeries;
