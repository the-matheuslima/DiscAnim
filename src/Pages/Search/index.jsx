import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import { AppContainer } from "../../globalStyles";
import * as C from "./style";
import Loading from "../../components/loading";

function Search() {
  const { id } = useParams();
  const [search, setSearch] = useState(null);

  useEffect(() => {
    axios.get(`https://api.jikan.moe/v4/anime?q=${id}&sfw=true&rating=R+`)
      .then(resp => setSearch(resp.data.data));
  }, [id]);

  return (
    <AppContainer>
      {search ?
        <C.ListItems >
          {search.map(anime => (
            <C.ListItem key={anime.mal_id}>
              <C.ListItemPoster src={anime.images.jpg.image_url} alt={anime.title} />

              <C.ListItemHidden>
                <Link to={`/catalog/${anime.mal_id}`}>
                  <C.AnimeTitle>{anime.title}</C.AnimeTitle>
                </Link>
              </C.ListItemHidden>
            </C.ListItem>
          )
          )}
        </C.ListItems>
        : <Loading />}
    </AppContainer>
  );
}

export default Search;
