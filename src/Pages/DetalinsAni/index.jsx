import React, { useEffect, useState } from "react";
import { useParams, } from "react-router-dom";

import { AppContainer } from "../../globalStyles";
import { AsideLeft, Flex, AsideRight } from "./style";

import axios from "axios";
import Loading from "../../components/Loading/index";
import Recommendation from "../../components/Recommendation/index";
import Characters from "./Characters/index";
import InfoHeader from "./InfoHeader/index";
import AnimeInfo from "./AnimeInfo/index";
import Poster from "../../components/Poster/index";

function index() {
  const { id } = useParams();
  const [desc, setDesc] = useState(null);
  const [characters, setCharacters] = useState(null);
  const [recommendation, setRecommendation] = useState(null);

  useEffect(() => {
    axios.get(`https://api.jikan.moe/v4/anime/${id}`)
      .then(resp => {
        setDesc(resp.data.data);
      });

    axios.get(`https://api.jikan.moe/v4/anime/${id}/characters`)
      .then(resp => {
        setCharacters(resp.data.data.slice(0, 11));
      });

    axios.get(`https://api.jikan.moe/v3/anime/${id}/recommendations`)
      .then(resp => {
        setRecommendation(resp.data.recommendations.slice(0, 10));
      });
  }, [id]);

  return (
    <main >
      <AppContainer>
        {desc && characters && recommendation ?
          <>
            <Flex>
              <AsideLeft>
                <Poster
                  poster={desc.images.jpg.image_url}
                  alt={desc.title}
                />

                <AnimeInfo
                  episodes={desc.episodes}
                  status={desc.status}
                  genres={desc.genres}
                  popularity={desc.popularity}
                  duration={desc.duration}
                  score={desc.score}
                  type={desc.demographics}
                  from={desc.aired.from}
                  to={desc.aired.to}
                />
              </AsideLeft>

              <AsideRight>
                <InfoHeader
                  rank={desc.rank}
                  rating={desc.rating}
                  title={desc.title}
                  synopsis={desc.synopsis}
                />
                <Characters
                  characters={characters}
                  id={id}
                />
              </AsideRight>
            </Flex>
            {recommendation ?
              <Recommendation recommendation={recommendation} />
              : null}
          </>
          : <Loading />}
      </AppContainer>
    </main >
  );
}

export default index;
