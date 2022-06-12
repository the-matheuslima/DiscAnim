import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../AppContext/Context";
import axios from "axios";

import { AnimeContent, CategoryTitle } from "./style";
import List from "../../components/List";
import Button from "../../components/Button/index";

function index() {
  const [popular, setPopular] = useState([]);
  const { setDetails } = useContext(AppContext);

  useEffect(() => {
    axios.get("https://api.jikan.moe/v3/season/later")
      .then(resp => {
        setPopular(resp.data.anime);
      });
  }, []);

  return (
    <AnimeContent>
      <CategoryTitle>
        season Later
      </CategoryTitle>
      <List optionSlide={{
        pagination: false,
        type: "loop",
        gap: "10px",
        fixedWidth: "185px",
        fixedHeight: "273px",
      }} state={popular.slice(0, 15)} />

      <Link to={"/detalins/"} onClick={() => setDetails(popular)}>
        <Button text={"ver mais"} />
      </Link>
    </AnimeContent>
  );
}

export default index;
