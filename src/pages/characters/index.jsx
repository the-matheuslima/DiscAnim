import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Loading from "../../components/loading/index";
import axios from "axios";
import { AppContainer } from "../../globalStyles";
import { ListItems, ListItem, ListItemImages, ListItemHidden, NameCharacter } from "./style";

import * as C from "./style";

function Catalog() {
  const { id } = useParams();
  const [characters, setCharacters] = useState(null);

  useEffect(() => {
    axios.get(`https://api.jikan.moe/v4/anime/${id}/characters`)
      .then(resp => setCharacters(resp.data.data));
  }, [id]);

  return (
    <main>
      <AppContainer>
        <C.ListItems>
          {characters ?
            <>
              {
                characters.map(({ character }) => (
                  <C.ListItem key={character.id}>
                    <C.ListItemImages src={character.images.jpg.image_url} alt={`character ${character.name}`} />
                    <C.ListItemHidden >
                      <a target="_blank" rel="noreferrer" href={character.url} >
                        <C.NameCharacter>
                          {character.name}
                        </C.NameCharacter>
                      </a>
                    </C.ListItemHidden>
                  </C.ListItem>
                ))
              }
            </>
            : <Loading />}
        </C.ListItems>
      </AppContainer>
    </main>
  );
}

export default Catalog;
