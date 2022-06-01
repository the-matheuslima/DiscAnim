import React, { useState, useEffect } from "react";

import axios from "axios";
import List from "../List/List";

function Action() {
    const [action, setAction] = useState([])

    useEffect(() => {
        axios.get(`https://api.jikan.moe/v3/genre/anime/1/1`)
            .then(resp => setAction(resp.data.anime))
    }, [])

    return (
        <section className="app__active app__container">
            <h2>Action</h2>
            <ul>
                <List optionSlide={{
                    perPage: 2,
                    arrows: true,
                    pagination: false,
                    drag: 'free',
                    type: 'loop',
                    gap: '10px',
                    fixedWidth: '225px',
                    fixedHeight: '313px',
                }} state={action} />

            </ul>
        </section>
    )
}

export default Action;
