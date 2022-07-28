import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { CategoryContext } from "../../context/category";

import List from "../list-anime";
import Button from "../button";
import * as C from "./style";
import { AnimeMore } from "../../globalStyles";

function UpcomingList() {
  const [popular, setPopular] = useState([]);
  const { SetCategoryToCatalog } = useContext(CategoryContext);

  useEffect(() => {
    axios.get("https://api.jikan.moe/v4/anime?status=upcoming&sfw=false&order_by=rating")
      .then(resp => {
        setPopular(resp.data.data);
      });
  }, []);


  const handleCategory = (catego) => {
    SetCategoryToCatalog(catego);
  };


  return (
    <C.AnimeContent>
      <AnimeMore>
        <C.CategoryTitle>
          Upcoming
        </C.CategoryTitle>
        <Link to={"/catalog/"} onClick={() => handleCategory(popular)}>
          <Button >
            see more
          </Button>
        </Link>
      </AnimeMore>

      <List state={popular.slice(0, 15)} />
    </C.AnimeContent>
  );
}

export default UpcomingList;
