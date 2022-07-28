import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { CategoryContext } from "../../context/category";
import Button from "../button/index";

import * as C from "./style";

function Header() {
  const [trending, setTrending] = useState([]);
  const { SetCategoryToCatalog } = useContext(CategoryContext);

  useEffect(() => {
    axios.get("https://api.jikan.moe/v4/top/anime")
      .then(resp => { setTrending(resp.data.data); });
  }, []);

  const handleCategory = (catego) => {
    SetCategoryToCatalog(catego);
  };

  return (
    <C.HeaderContent>
      <C.ListItems>
        {trending.slice(0, 11).map(anime => (
          <C.ListItem key={anime.mal_id}>
            <C.ListItemPoster src={anime.images.jpg.image_url} alt={anime.title} />
            <C.ListItemHiddenAnime>
              <Link to={`/catalog/${anime.mal_id}`}>
                <C.ListItemNameAnime>{anime.title}</C.ListItemNameAnime>
              </Link>
            </C.ListItemHiddenAnime>
          </C.ListItem>
        )
        )}
      </C.ListItems>
      <Link to={"/catalog/"} onClick={() => handleCategory(trending)}>
        <Button >
          see more
        </Button>
      </Link>
    </C.HeaderContent >
  );
}

export default Header;
