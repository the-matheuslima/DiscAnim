import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

import Button from '../../components/Button/index'
import './style.scss'
import { Link } from "react-router-dom";
import AppContext from "../../AppContext/Context";

function Header() {
  const [trending, setTrending] = useState([])
  const { setDetails } = useContext(AppContext)

  useEffect(() => {
    axios.get(`https://api.jikan.moe/v3/top/anime`)
      .then(resp => {
        setTrending(resp.data.top)
      })
  }, [])

  return (
    <header className="app__header">
      < ul className="app__header-items">
        {trending.slice(0, 11).map(anime => {
          return (
            <li className="app__header-item" key={anime.mal_id}>
              <img src={anime.image_url} alt="" />
              <div className="app__header-title">
                <Link to={`/detalins/${anime.mal_id}`}
                >
                  <h2>{anime.title}</h2>
                </Link>
              </div>
            </li>
          )
        })}
      </ul>
      <Link to={`/detalins/`} onClick={() => setDetails(trending)}>

        <Button text={'ver mais'} />
      </Link>
    </header >
  )
}

export default Header;
