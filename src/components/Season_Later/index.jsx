import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../AppContext/Context";
import axios from "axios";

import './style.scss'
import List from "../List";
import Button from "../Button/index";

function Season_Later() {
    const [popular, setPopular] = useState([])
    const { setDetails } = useContext(AppContext)


    useEffect(() => {
        axios.get(`https://api.jikan.moe/v3/season/later`)
            .then(resp => {
                setPopular(resp.data.anime)
            })
    }, [])

    return (
        <section className="app__anime-season-later app__container">
            <h2>season Later</h2>
            <div className="app__anime-season-later-items">
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
                }} state={popular.slice(0, 15)} />
            </div>

            <Link to={`/detalins/`} onClick={() => setDetails(popular)}>
                <Button text={'ver mais'} />
            </Link>
        </section>
    )
}

export default Season_Later;
