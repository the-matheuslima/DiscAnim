import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../AppContext/Context";
import axios from "axios";

import List from "../../components/List/index";
import Button from "../../components/Button/index";
import './style.scss'


function Action() {
  const [action, setAction] = useState([])
  const { setDetails } = useContext(AppContext)

  useEffect(() => {
    axios.get(`https://api.jikan.moe/v3/genre/anime/1/1`)
      .then(resp => {
        setAction(resp.data.anime)
      })
  }, [])

  return (
    <section className="app__action app__container">
      <h2>Action</h2>
      <ul className="app__anime-action-items">
        <List optionSlide={{
          perPage: 2,
          arrows: true,
          pagination: false,
          drag: 'free',
          type: 'loop',
          gap: '10px',
          fixedWidth: '185px',
          fixedHeight: '273px',
        }} state={action} />

      </ul>
      <Link to={`/detalins/`} onClick={() => setDetails(action)}>
        <Button text={'ver mais'} />
      </Link>
    </section>
  )
}

export default Action;
