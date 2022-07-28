import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";

import * as C from "./style";

function ListAnimes({ state }) {

  return (
    <Splide options={{
      pagination: false,
      perPage: 3,
      type: "loop",
      gap: "10px",
      fixedWidth: '185px',
      fixedHeight: '285px'
    }}>

      {
        state.map(anime => (
          <SplideSlide key={anime.mal_id}>
            <C.ListConteiner>
              <C.ListItemsPoster
                src={anime.images.jpg.image_url}
                alt={"anime " + anime.title}
              />
              <C.ListItemHiddenAnime>
                <Link to={`/catalog/${anime.mal_id}`}>
                  <C.ListItemNameAnime>
                    {anime.title}
                  </C.ListItemNameAnime>
                </Link>
              </C.ListItemHiddenAnime>
            </C.ListConteiner>
          </SplideSlide>
        ))
      }
    </Splide >
  );
}

export default ListAnimes;
