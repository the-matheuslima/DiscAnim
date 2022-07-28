import React from "react";
import moment from "moment";
import * as C from "./style";

function AnimeInfo({ episodes, genres, status, popularity, duration, score, type, from, to }) {
  return (
    <C.DetailsInfo>
      <C.BorderInfo>Episodes: {episodes}</C.BorderInfo>
      <C.BorderInfo>Status: {status}</C.BorderInfo>
      <C.BorderInfo>Genres:
        {genres.map((genres) => (
          <span key={genres}>{" " + genres.name + " "}</span>
        )
        )}
      </C.BorderInfo>
      <C.BorderInfo>Popularity: {popularity}</C.BorderInfo>
      <C.BorderInfo>Duration: {duration}</C.BorderInfo>
      <C.BorderInfo>Score: {score}</C.BorderInfo>
      <C.BorderInfo>Type: {type.map(ele => ele.name)}</C.BorderInfo>
      <C.BorderInfo>release year:  {moment(from).format("L")}</C.BorderInfo>
      <C.BorderInfo>closing year: {moment(to).format("L")}</C.BorderInfo>
    </C.DetailsInfo>
  );
}

export default AnimeInfo;
