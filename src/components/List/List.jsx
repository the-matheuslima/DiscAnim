import React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css';
import './List.scss'
import { Link } from "react-router-dom";

function List({ optionSlide, state }) {
    return (
        <Splide
            options={
                optionSlide
            }
        >
            {
                state.map(movies => {
                    return (
                        <SplideSlide >
                            <li key={movies.mal_id || movies.id} className="app__list-item">
                                <img src={movies.image_url} alt={"movie " + movies.title} />
                                <div className="app__list-title">
                                    <Link to={`/detalins/${movies.mal_id || movies.id}`}><p>{movies.title}</p></Link>
                                </div>
                            </li>
                        </SplideSlide>
                    )

                })
            }
        </Splide >
    )
}

export default List;
