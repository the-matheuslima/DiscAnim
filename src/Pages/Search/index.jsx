import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import axios from "axios";
import Loading from "../../components/Loading/index";
import { AppContainer } from "../../globalStyles";
import { ListItems, ListItem, AnimeTitle, ListItemHidden, ListItemPoster } from "./style";

function index() {
  const { id } = useParams();
  const [search, setSearch] = useState(null);

  useEffect(() => {
    axios.get(`https://api.jikan.moe/v4/anime?q=${id}&sfw=true&rating=R+`)
      .then(resp => setSearch(resp.data.data));
  }, [id]);

  return (
    <AppContainer>
      {search ?
        <ListItems >
          {search.map(ani => {
            return (
              <ListItem key={ani.mal_id}>
                <ListItemPoster src={ani.images.jpg.image_url} alt={ani.title} />

                <ListItemHidden>
                  <Link to={`/detalins/${ani.mal_id}`}>
                    <AnimeTitle>{ani.title}</AnimeTitle>
                  </Link>
                </ListItemHidden>
              </ListItem>
            );
          })}
        </ListItems>
        : <Loading />}
    </AppContainer>
  );
}

export default index;
