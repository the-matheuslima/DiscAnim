import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Loading from '../../components/Loading/index'
import axios from "axios";
import './style.scss'

function Characters() {
    const { id } = useParams()
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        axios.get(`https://api.jikan.moe/v4/anime/${id}/characters`)
            .then(resp => setCharacters(resp.data.data))
    }, [id])

    return (
        <div className="app__characters app__container">
            {characters ?
                <ul className="app__characters-items">
                    <>
                        {
                            characters.map((characters) => (
                                <li className="app__characters-item" >
                                    <img src={characters.character.images.jpg.image_url} alt={`character ${characters.character.name}`} />
                                    <div className="app__characters-name">
                                        <a target="_blank" href={characters.character.url} >
                                            <h2>{characters.character.name}</h2>
                                        </a>
                                    </div>
                                </li>
                            ))
                        }
                    </>
                </ul>
                : <Loading />}
        </div>
    );
}

export default Characters;
