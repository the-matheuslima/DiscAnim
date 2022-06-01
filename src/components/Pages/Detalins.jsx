import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import './Detalins.scss'

import axios from "axios";
import moment from 'moment';

function Detalins() {
    const { id } = useParams()
    const [desc, setDesc] = useState([])
    const [characters, setCharacters] = useState([])


    useEffect(() => {
        console.log(id)
        axios.get(`https://api.jikan.moe/v4/anime/${id}`)
            .then(resp => setDesc(resp.data.data))

        axios.get(`https://api.jikan.moe/v4/anime/${id}/characters`)
            .then(resp => setCharacters(resp.data.data.slice(0, 4)))
        // console.log(desc)
    }, [id])

    return (
        <>
            <div className="app__flex app__container">
                <aside className="app__dtl-left">
                    <div className="app__poster">
                        <img src={desc.images} alt="" />
                    </div>

                    <div className="app__dtl-info">
                        <p>Episodes: {desc.episodes}</p>
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

                        <div className="app__date">
                            {/* <p> Ano de Lançamento:  {desc.aired.from ? moment(desc.aired.from).format('L') : 'null'}</p> */}


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
                    </div>
                </aside>
            </div>

            <section className="related">
                <div className="adaptation border">
                    <h3>Adaptation:</h3>
                    <ul className="app__related-items">

                        {desc.related ? desc.related.Adaptation.map((ele) => {
                            return (
                                <li className="app__related-item">
                                    <Link to={`/detalins/${ele.mal_id || ele.id}`}>
                                        <p> {ele.name} <span className="type">type: {ele.type}</span></p>
                                    </Link>
                                </li>
                            )
                        }) : 'loading'}
                    </ul>
                </div>
                < div className="prequel border">

                    < h3 > Prequel</h3>
                    <ul className="app__related-items">
                        {/* {desc.related.Prequel ?

                            desc.related.Prequel.map((ele) => (
                                <li className="app__related-item">
                                    <Link to={`/detalins/${ele.mal_id || ele.id}`}>
                                        <p> {ele.name} <span className="type">type: {ele.type}</span></p>
                                    </Link>
                                </li>
                            )
                            ) : 'null'} */}
                    </ul>
                </div>

            </section>
        </>
    );
}

export default Detalins;
