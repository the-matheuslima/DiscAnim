import React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css';
import './style.scss'
import { Link } from "react-router-dom";

function List({ optionSlide, state }) {
    return (
        <Splide options={optionSlide}> {
            state.map(movies => (
                <SplideSlide key={movies.mal_id} >
                    <div className="app__list-item">
                        <img src={movies.image_url} alt={"movie " + movies.title} />
                        <div className="app__list-title">
                            <Link to={`/detalins/${movies.mal_id}`}>
                                <p>{movies.title}</p></Link>
                        </div>
                    </div>
                </SplideSlide>
            ))

        }
        </Splide >
    )
}

export default List;
