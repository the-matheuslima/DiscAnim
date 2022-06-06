import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import axios from "axios";
import Loading from '../Loading/index'
import './style.scss'

function Search() {
    const { id } = useParams();
    const [search, setSearch] = useState(null)

    useEffect(() => {
        axios.get(`https://api.jikan.moe/v4/anime?q=${id}&sfw=true&rating=R+`)
            .then(resp => setSearch(resp.data.data))
    }, [id])

    return (
        <section className="app__search app__container">
            {search ?
                <ul className="app__search-items">
                    {search.map(ani => {
                        return (
                            <li className="app__search-item" key={ani.mal_id}>
                                <div className="app__search-item-img">
                                    <img src={ani.images.jpg.image_url} alt={ani.title} />
                                </div>

                                <div className="app__search-item-title">
                                    <Link to={`/detalins/${ani.mal_id}`}><h3>{ani.title}</h3></Link>
                                </div>
                            </li>
                        )
                    })}
                </ul>
                : <Loading />}
        </section>
    );
}

export default Search;
