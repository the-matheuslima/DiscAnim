import React from "react";
import { useNavigate } from "react-router-dom";
import { RecommendationContent, ListItems, ListItem, ListItemPoster, Title } from "./style";

function index({ recommendation }) {
  const navigate = useNavigate();

  function handleNavitage(id) {
    navigate(`/detalins/${id}`, { replace: true });
  }
  return (
    <RecommendationContent>
      <Title>Recommendation</Title>
      <ListItems>
        {recommendation.map((anime) => (
          <ListItem key={anime.mal_id} onClick={() => handleNavitage(anime.mal_id)}>
            <ListItemPoster src={anime.image_url} alt={"anime " + anime.title} />
          </ListItem>
        )
        )}
      </ListItems>
    </RecommendationContent>
  );
}

export default index;
