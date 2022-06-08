import React, { useState, useEffect, useContext } from "react";

// import { Splide, SplideSlide } from '@splidejs/react-splide'
// import { Grid } from "@splidejs/splide-extension-grid";
import '@splidejs/react-splide/css';
import './Manga.scss'

import axios from "axios";
import List from "../../components/List";
import AppContext from "../../AppContext/Context";
import { Link } from "react-router-dom";
import Button from "../../components/Button";


function Manga() {
  const [manga, setManga] = useState([])
  const { setDetails } = useContext(AppContext)

  useEffect(() => {
    axios.get(`https://api.jikan.moe/v3/top/manga/1/manga`)
      .then(resp => setManga(resp.data.top))
    console.log(manga)
  }, [])

  return (
    <section className="app__manga app__container">
      <h2>Manga</h2>
      <ul className="app__manga-items">
        <List optionSlide={{
          perPage: 2,
          type: 'loop',
          arrows: true,
          pagination: false,
          drag: 'free',
          gap: '10px',
          fixedWidth: '225px',
          fixedHeight: '313px',
        }} state={manga.slice(0, 20)} />
      </ul>
      <Link to={`/detalins/`} onClick={() => setDetails(manga)}>
        <Button text={'ver mais'} />
      </Link>
    </section >
  )
}

export default Manga;
