import React from "react";

import * as C from "./style";

function InfoHeader({ rank, rating, title, synopsis }) {
  return (
    <C.InfoDesc>
      <C.FontSize>Rank: #{rank}</C.FontSize>
      <C.FontSize>{rating}</C.FontSize>
      <h1>{title}</h1>
      <h2>Synopsis</h2>
      <C.Synopsis>{synopsis}</C.Synopsis>
    </C.InfoDesc>
  );
}

export default InfoHeader;
