import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../AppContext/Context";
import axios from "axios";

import List from "../../components/List/index";
import Button from "../../components/Button/index";
import { AnimeContent, CategoryTitle } from "./style";


function index() {
  const [action, setAction] = useState([]);
  const { setDetails } = useContext(AppContext);

  useEffect(() => {
    axios.get("https://api.jikan.moe/v3/genre/anime/1/1")
      .then(resp => {
        setAction(resp.data.anime);
      });
  }, []);

  return (
    <AnimeContent className="app__action app__container">
      <CategoryTitle>Action</CategoryTitle>
      <List optionSlide={{
        pagination: false,
        type: "loop",
        gap: "10px",
        fixedWidth: "185px",
        fixedHeight: "273px",
      }} state={action} />

      <Link to={"/detalins/"} onClick={() => setDetails(action)}>
        <Button text={"ver mais"} />
      </Link>
    </AnimeContent>
  );
}

export default index;
