import React from "react";
import { PosterContent, PosterImg } from "../../globalStyles";

function index({ poster, alt }) {
  return (
    <PosterContent>
      <PosterImg src={poster} alt={alt} />
    </PosterContent>
  );
}

export default index;
