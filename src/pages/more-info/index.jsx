import React, { useEffect, useState } from "react";
import { useParams, } from "react-router-dom";

import { AppContainer } from "../../globalStyles";
import * as C from "./style"

import axios from "axios";
import Loading from "../../components/loading";
import Recommendation from "../../components/recommendation";
import Characters from "./characters-anime";
import InfoHeader from "./info-header";
import AnimeInfo from "./anime-info";
import Poster from "../../components/poster";

function MoreInfo() {
  const { id } = useParams();
  const [desc, setDesc] = useState(null);
  const [characters, setCharacters] = useState(null);
  const [recommendation, setRecommendation] = useState(null);

  useEffect(() => {
    axios.get(`https://api.jikan.moe/v4/anime/${id}`)
      .then(resp => {
        setDesc(resp.data.data);
      });
  }, [id])

  useEffect(() => {
    axios.get(`https://api.jikan.moe/v4/anime/${id}/characters`)
      .then(resp => {
        setCharacters(resp.data.data.slice(0, 11));
      })
  }, [id])

  useEffect(() => {
    axios.get(`https://api.jikan.moe/v3/anime/${id}/recommendations`)
      .then(resp => {
        setRecommendation(resp.data.recommendations.slice(0, 10));
      });
  }, [id])

  return (
    <main >
      <AppContainer>
        {desc && characters && recommendation ?
          <>
            <C.Flex>
              <C.AsideLeft>
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
              </C.AsideLeft>

              <C.AsideRight>
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
              </C.AsideRight>
            </C.Flex>
            {recommendation ?
              <Recommendation recommendation={recommendation} />
              : null}
          </>
          : <Loading />}
      </AppContainer>
    </main >
  );
}

export default MoreInfo;
