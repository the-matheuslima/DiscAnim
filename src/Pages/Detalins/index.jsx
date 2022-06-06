import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../AppContext/Context";
import './style.scss'

function index() {
    const { category } = useContext(AppContext)

    useEffect(() => {
        console.log(category)
    }, [category])

    return (
        <div className="app__details  app__container">
            < ul className="app__details-items">
                {category.details.category.map(anime => {
                    return (
                        <li className="app__details-item" key={anime.mal_id}>
                            <img src={anime.image_url} alt="" />
                            <div className="app__header-title">
                                <Link to={`/detalins/${anime.mal_id}`}
                                >
                                    <h2>{anime.title}</h2>
                                </Link>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default index;
