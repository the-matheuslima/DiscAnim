import React from "react";
import { useNavigate } from "react-router-dom";

import * as C from "./style";

function Recommendation({ recommendation }) {
  const navigate = useNavigate();

  function handleNavitage(id) {
    navigate(`/catalog/${id}`);
  }
  return (
    <C.RecommendationContent>
      <C.Title>Recommendation</C.Title>
      <C.ListItems>
        {recommendation.map((anime) => (
          <C.ListItem key={anime.mal_id} onClick={() => handleNavitage(anime.mal_id)}>
            <C.ListItemPoster src={anime.image_url} alt={"anime " + anime.title} />
          </C.ListItem>
        )
        )}
      </C.ListItems>
    </C.RecommendationContent>
  );
}

export default Recommendation;
