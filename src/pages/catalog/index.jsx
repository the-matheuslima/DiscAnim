import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CategoryContext } from "../../context/category";
import Poster from "../../components/poster";

import * as C from "./style";
import { AppContainer } from "../../globalStyles";

function Catalog() {
  const { category } = useContext(CategoryContext);

  return (
    <AppContainer>
      <C.ListItems>
        {category.map((anime) => (
          <C.ListItem key={anime.mal_id}>
            <Poster poster={anime.images.jpg.image_url} alt={anime.title} />
            <C.ListItemHidden>
              <Link to={`/catalog/${anime.mal_id}`}>
                <C.NameAnime>
                  {anime.title}
                </C.NameAnime>
              </Link>
            </C.ListItemHidden>
          </C.ListItem>
        )
        )}
      </C.ListItems>
    </AppContainer>
  );
}

export default Catalog;
