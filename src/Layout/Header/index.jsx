import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import AppContext from "../../AppContext/Context";
import Button from "../../components/Button/index";
import { ListItems, HeaderContent, ListItem, ListItemPoster, ListItemNameAnime, ListItemHiddenAnime } from "./style";

function index() {
  const [trending, setTrending] = useState([]);
  const { setDetails } = useContext(AppContext);

  useEffect(() => {
    axios.get("https://api.jikan.moe/v3/top/anime")
      .then(resp => {
        setTrending(resp.data.top);
      });
  }, []);

  return (
    <HeaderContent>
      <ListItems>
        {trending.slice(0, 11).map(anime => (
          <ListItem key={anime.mal_id}>
            <ListItemPoster src={anime.image_url} alt={anime.title} />
            <ListItemHiddenAnime>
              <Link to={`/detalins/${anime.mal_id}`}>
                <ListItemNameAnime>{anime.title}</ListItemNameAnime>
              </Link>
            </ListItemHiddenAnime>
          </ListItem>
        )
        )}
      </ListItems>
      <Link to={"/detalins/"} onClick={() => setDetails(trending)}>
        <Button text={"ver mais"} />
      </Link>
    </HeaderContent >
  );
}

export default index;
