import React from "react";
import moment from "moment";
import { DetailsInfo, BorderInfo } from "./style";

function index({ episodes, genres, status, popularity, duration, score, type, from, to }) {
  return (
    <DetailsInfo>
      <BorderInfo>Episodes: {episodes}</BorderInfo>
      <BorderInfo>Status: {status}</BorderInfo>
      <BorderInfo>Genres:
        {genres.map((genres) => (
          <>
            {" " + genres.name + " "}
          </>
        )
        )}
      </BorderInfo>
      <BorderInfo>Popularity: {popularity}</BorderInfo>
      <BorderInfo>Duration: {duration}</BorderInfo>
      <BorderInfo>Score: {score}</BorderInfo>
      <BorderInfo>Type: {type.map(ele => ele.name)}</BorderInfo>
      <BorderInfo>release year:  {moment(from).format("L")}</BorderInfo>
      <BorderInfo>closing year: {moment(to).format("L")}</BorderInfo>
    </DetailsInfo>
  );
}

export default index;
