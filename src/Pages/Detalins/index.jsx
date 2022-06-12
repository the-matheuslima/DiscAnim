import React, { useContext } from "react";

import { Link } from "react-router-dom";
import AppContext from "../../AppContext/Context";

import { AppContainer } from "../../globalStyles";
import { ListItems, ListItem, ListItemHidden, NameAnime } from "./style";
import Poster from "../../components/Poster";

function index() {
  const { category } = useContext(AppContext);

  return (
    <AppContainer>
      <ListItems>
        {category.details.category.map(anime => (
          <ListItem key={anime.mal_id}>
            <Poster poster={anime.image_url} alt={anime.title} />
            <ListItemHidden>
              <Link to={`/detalins/${anime.mal_id}`}>
                <NameAnime>
                  {anime.title}
                </NameAnime>
              </Link>
            </ListItemHidden>
          </ListItem>
        )
        )}
      </ListItems>
    </AppContainer>
  );
}

export default index;
