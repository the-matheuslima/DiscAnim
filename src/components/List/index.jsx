import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";
import { ListConteiner, ListItemsPoster, ListItemHiddenAnime, ListItemNameAnime } from "./style";

function index({ optionSlide, state }) {
  return (
    <Splide options={optionSlide}> {
      state.map(movies => (
        <SplideSlide key={movies.mal_id}>
          <ListConteiner>
            <ListItemsPoster
              src={movies.image_url}
              alt={"movie " + movies.title}
            />
            <ListItemHiddenAnime>
              <Link to={`/detalins/${movies.mal_id}`}>
                <ListItemNameAnime>
                  {movies.title}
                </ListItemNameAnime></Link>
            </ListItemHiddenAnime>
          </ListConteiner>
        </SplideSlide>
      ))

    }
    </Splide >
  );
}

export default index;
