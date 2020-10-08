import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

const image_url = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movie, setMovie] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      console.log(request);
      setMovie(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]); //here [] empty square bracket means, it loads only once when first time load.and if there is variable it load when variable changes

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
          console.log("vvvvv",trailerUrl)
        })
        .catch((error) => console.log(error));
    }
  };

  const opt = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movie.map((item) => (
          <img
            onClick={() => handleClick(item)}
            key={item.id}
            className={`row_poster ${isLargeRow && "row_postersLarge"}`}
            src={`${image_url}${
              isLargeRow ? item.poster_path : item.backdrop_path
            }`}
            alt={item.name}
          />
        ))}
      </div>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opt} />}
    </div>
  );
}

export default Row;
