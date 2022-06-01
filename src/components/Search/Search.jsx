import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import './Search.scss'

function Search() {
    const { id } = useParams();
    const [search, setSearch] = useState([])

    console.log(id)

    useEffect(() => {
        // console.log(id)
        axios.get(`https://api.jikan.moe/v4/anime?q=${id}&sfw=true&rating=R+`)
            .then(resp => setSearch(resp.data.data))
        // console.log(id)
    }, [id])

    return (
        <section className="app__search app__container">
            <ul className="app__search-items">
                {search.map(ani => {
                    return (
                        <li className="app__search-item" key={ani.mal_id}>
                            <div className="app__search-item-img">
                                <img src={ani.images.jpg.image_url} alt={ani.title} />
                            </div>

                            <div className="app__search-item-title">
                                <Link to={`/detalins/${ani.mal_id}`}><h3>{ani.title}</h3></Link>
                                <p>{ani.mal_id}</p>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </section>
    );
}

export default Search;
