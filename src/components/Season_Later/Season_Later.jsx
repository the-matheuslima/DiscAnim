import React, { useState, useEffect } from "react";

import './Season_Later.scss'

import axios from "axios";
import List from "../List/List";
import Button from "../Button/Button";

function Season_Later() {
    const [popular, setPopular] = useState([])

    useEffect(() => {
        axios.get(`https://api.jikan.moe/v3/season/later`)
            .then(resp => setPopular(resp.data.anime.slice(0, 15)))
    }, [])

    return (
        <section className="app__anime-season-later app__container">
            <h2>season Later</h2>
            <ul className="app__anime-season-later-items">
                <List optionSlide={{
                    perPage: 4,
                    type: 'loop',
                    arrows: false,
                    pagination: false,
                    drag: 'free',
                    gap: '10px',
                    padding: { left: 10, right: 80 },
                    fixedWidth: '225px',
                    fixedHeight: '313px',
                }} state={popular} />
            </ul>

            <Button text={'ver mais'} />
        </section>
    )
}

export default Season_Later;
