import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './style.scss'

import axios from "axios";
import moment from 'moment';
import Button from "../../components/Button/index";
import Loading from '../../components/Loading/index'


function Detalins() {
  const { id } = useParams();
  const [desc, setDesc] = useState(null);
  const [characters, setCharacters] = useState(null);
  const [recommendation, setRecommendation] = useState(null);

  const refreshPage = () => {
    setTimeout(() => {

      window.location.reload();
    }, 100)
  }

  useEffect(() => {
    axios.get(`https://api.jikan.moe/v4/anime/${id}`)
      .then(resp => {
        setDesc(resp.data.data)
      })

    axios.get(`https://api.jikan.moe/v4/anime/${id}/characters`)
      .then(resp => {
        setCharacters(resp.data.data.slice(0, 11))
      })

    axios.get(`https://api.jikan.moe/v3/anime/${id}/recommendations`)
      .then(resp => {
        setRecommendation(resp.data.recommendations.slice(0, 10))
      })
    console.log(recommendation)
  }, [])

  return (
    <>
      {desc && characters && recommendation ?
        <main className="app__info app__container">
          <div className="app__flex">
            <aside className="app__aside-left">
              <div className="app__poster">
                <img src={desc.images ? desc.images.jpg.image_url : 'loading'} alt={desc.title} />
              </div>
              <div className="app__dtl-info">
                <p>Episodes: {desc.episodes}</p>
                <p>Status: {desc.status}</p>
                <p>Genres:
                  {desc.genres && desc.genres.map((genres) => (
                    <>
                      {" " + genres.name + " "}
                    </>
                  )
                  )}
                </p>
                <p>Popularity: {desc.popularity}</p>
                <p>Duration: {desc.duration}</p>
                <p>Score: {desc.score}</p>
                <p>Type: {desc.demographics && desc.demographics.map(ele => ele.name)}</p>

                <div className="app__date">
                  {desc.aired ? <p> release year:  {moment(desc.aired.from).format('L')}</p> : null}

                  {desc.aired.to ?
                    <p> closing year: {moment(desc.aired.to).format('L')}</p> : null}
                </div>
              </div>
            </aside>

            <div className="app__aside-right">
              <div>
                <div className="app__info-desc">
                  <p className="app__font">Rank: #{desc.rank}</p>
                  <p className="app__font">{desc.rating}</p>
                  <h1>{desc.title}</h1>
                  <h3>Synopsis</h3>
                  <p className="app__info-synopsis">{desc.synopsis}</p>
                </div>
              </div>

              <div className="app__characters">
                <ul className="app__characters-items">
                  {characters.map((characters) => {
                    return (
                      <li className="app__characters-item" key={characters.id}>
                        <img src={characters.character.images.jpg.image_url} alt={'characters ' + characters.character.name} />
                      </li>
                    )
                  })}
                </ul>
                <Link to={`/detalins/${id}/characters`}>
                  <Button text={'ver mais'} />
                </Link>
              </div>
            </div>
          </div>

          {recommendation ?
            <div className="app__recommendation">
              <h2 className="app__recommendation-title">Recommendation</h2>
              <ul className="app__recommendation-items">
                {recommendation.map((anime) => {
                  return (
                    <li className="app__recommendation-item">
                      <Link to={`/detalins/${anime.mal_id}`}  >
                        <img src={anime.image_url} alt={'anime ' + anime.title} onClick={refreshPage} />
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
            : null}
        </main >
        : <Loading />
      }
    </>

  );
}

export default Detalins;
