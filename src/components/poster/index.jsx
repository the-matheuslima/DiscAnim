import React from "react";
import { PosterContent, PosterImg } from "../../globalStyles";

function Poster({ poster, alt }) {
  return (
    <PosterContent>
      <PosterImg src={poster} alt={alt} />
    </PosterContent>
  );
}

export default Poster;
