import React, { useEffect, useState } from "react";
import axios from "axios";

import Navbar from '../Navbar/Navbar'
import Button from '../../Button/Button'
import './Header.scss'
import { Link } from "react-router-dom";



function Header() {
    const [trending, setTrending] = useState([])

    useEffect(() => {
        axios.get(`https://api.jikan.moe/v3/top/anime`)
            .then(resp => setTrending(resp.data.top.slice(0, 10)))
    }, [])

    return (
        <header className="app__header">
            {/* <h2>Top</h2> */}
            <ul className="app__header-items">
                {trending.map(movie => {
                    return (
                        <li className="app__header-item" key={movie.mal_id}>
                            <img src={movie.image_url} alt="" />
                            <div className="app__header-title">
                                <Link to={`/detalins/${movie.mal_id}`}>
                                    <h2>{movie.title}</h2>
                                </Link>
                            </div>
                        </li>
                    )
                })}
            </ul>
            <Button type={'button'} text={'ver mais'} />
        </header >
    )
}


export default Header;