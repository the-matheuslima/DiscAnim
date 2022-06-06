import React, { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import './style.scss'

import axios from "axios";
import moment from 'moment';
import Button from "../../components/Button/index";
import Loading from '../../components/Loading/index'
import AppContext from "../../AppContext/Context";


function Detalins() {
    const { id } = useParams()
    const [desc, setDesc] = useState(null)
    const [characters, setCharacters] = useState(null)
    const { category } = useContext(AppContext)

    useEffect(() => {
        axios.get(`https://api.jikan.moe/v4/anime/${id}`)
            .then(resp => {
                setDesc(resp.data.data)
                console.log(desc)
                console.log(category);
            })

        axios.get(`https://api.jikan.moe/v4/anime/${id}/characters`)
            .then(resp => {
                setCharacters(resp.data.data.slice(0, 4))
            })

    }, [])

    return (
        <>
            {desc && characters ?
                <div className="app__flex app__container">
                    <aside className="app__dtl-left">
                        <div className="app__poster">
                            <img src={desc.images ? desc.images.jpg.image_url : 'loading'} alt="" />
                        </div>

                        <div className="app__dtl-info">
                            <p>Episodes:
                                {desc.episodes}
                            </p>
                            <p>Genres:
                                {desc.genres && desc.genres.map((genres) => (
                                    <>
                                        {" " + genres.name + " "}
                                    </>
                                )
                                )}
                            </p>
                            <p>Duration: {desc.duration}</p>
                            <p>Score: {desc.score}</p>
                            <p>Type: {desc.demographics && desc.demographics.map(ele => ele.name)}</p>

                            <div className="app__date">
                                <p> Ano de Lançamento:  {desc.aired ? moment(desc.aired.from).format('L') : 'null'}</p>
                                <p> Ultima temporada:  {desc.aired ? moment(desc.aired.to).format('L') : 'null'}</p>
                            </div>
                        </div>
                    </aside>

                    <section className="app__dtl-center">
                        <div className="app__info">
                            <h1>{desc.title}</h1>
                            <p>{desc.synopsis}</p>
                        </div>
                    </section>

                    <aside className="app__dtl-right">
                        <div className="app__characters">
                            <ul className="app__characters-items">
                                {characters.map((characters) => {
                                    return (
                                        <li className="app__characters-item" key={characters.id}>
                                            <img src={characters.character.images.jpg.image_url} alt="" />
                                        </li>
                                    )
                                })}
                            </ul>
                            <Link to={`/detalins/${id}/characters`}>
                                <Button text={'ver mais'} />
                            </Link>
                        </div>
                    </aside>
                </div>
                : <Loading />}
        </>
    );
}

export default Detalins;
