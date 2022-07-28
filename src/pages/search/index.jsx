import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import axios from "axios";
import Loading from "../../components/loading/";
import { AppContainer } from "../../globalStyles";
import * as C from "./style"

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
          {search.map(anime => {
            return (
              <C.ListItem key={anime.mal_id}>
                <ListItemPoster src={anime.images.jpg.image_url} alt={anime.title} />

                <C.ListItemHidden>
                  <Link to={`/catalog/${anime.mal_id}`}>
                    <C.AnimeTitle>{anime.title}</C.AnimeTitle>
                  </Link>
                </C.ListItemHidden>
              </C.ListItem>
            );
          })}
        </C.ListItems>
        : <Loading />}
    </AppContainer>
  );
}

export default Search;
