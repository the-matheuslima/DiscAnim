import React, { useState, useEffect } from "react";

// import { Splide, SplideSlide } from '@splidejs/react-splide'
// import { Grid } from "@splidejs/splide-extension-grid";
import '@splidejs/react-splide/css';
import './Manga.scss'

import axios from "axios";
import List from "../List/List";


function Manga() {
    const [manga, setManga] = useState([])

    useEffect(() => {
        axios.get(`https://api.jikan.moe/v3/top/manga/5/manga`)
            .then(resp => setManga(resp.data.top.slice(0, 20)))
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
                }} state={manga} />
            </ul>
        </section >
    )
}

export default Manga;
