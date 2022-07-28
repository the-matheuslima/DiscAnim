import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { CategoryContext } from "../../context/category";

import ListAnime from "../list-anime";
import Button from "../button";

import * as C from "./style";
import { AnimeMore } from "../../globalStyles";

function ActionList() {
  const [action, setAction] = useState([]);
  const { SetCategoryToCatalog } = useContext(CategoryContext);

  useEffect(() => {
    axios.get("https://api.jikan.moe/v4/anime?genres=1&sfw=true&rating=r17&order_by=rating")
      .then(resp => {
        setAction(resp.data.data);
      });
  }, []);

  const handleCategory = (catego) => {
    SetCategoryToCatalog(catego);
  };

  return (
    <C.AnimeContent className="app__action app__container">
      <AnimeMore>
        <C.CategoryTitle>Action</C.CategoryTitle>
        <Link to={"/catalog/"} onClick={() => handleCategory(action)}>
          <Button >
            see more
          </Button>
        </Link>
      </AnimeMore>
      <ListAnime state={action} />
    </C.AnimeContent>
  );
}

export default ActionList;
