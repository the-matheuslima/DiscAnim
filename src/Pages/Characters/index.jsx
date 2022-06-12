import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Loading from "../../components/Loading/index";
import axios from "axios";
import { AppContainer } from "../../globalStyles";
import { ListItems, ListItem, ListItemImages, ListItemHidden, NameCharacter } from "./style";

function index() {
  const { id } = useParams();
  const [characters, setCharacters] = useState(null);

  useEffect(() => {
    axios.get(`https://api.jikan.moe/v4/anime/${id}/characters`)
      .then(resp => setCharacters(resp.data.data));
  }, [id]);

  return (
    <main>
      <AppContainer>
        <ListItems>
          {characters ?
            <>
              {
                characters.map(({ character }) => (
                  <ListItem key={character.id}>
                    <ListItemImages src={character.images.jpg.image_url} alt={`character ${character.name}`} />
                    <ListItemHidden >
                      <a target="_blank" rel="noreferrer" href={character.url} >
                        <NameCharacter>
                          {character.name}
                        </NameCharacter>
                      </a>
                    </ListItemHidden>
                  </ListItem>
                ))
              }
            </>
            : <Loading />}
        </ListItems>
      </AppContainer>
    </main>
  );
}

export default index;
