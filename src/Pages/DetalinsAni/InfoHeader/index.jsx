import React from "react";
import { FontSize, Synopsis, InfoDesc } from "./style";

function index({ rank, rating, title, synopsis }) {
  return (
    <InfoDesc>
      <FontSize>Rank: #{rank}</FontSize>
      <FontSize>{rating}</FontSize>
      <h1>{title}</h1>
      <h2>Synopsis</h2>
      <Synopsis>{synopsis}</Synopsis>
    </InfoDesc>
  );
}

export default index;
