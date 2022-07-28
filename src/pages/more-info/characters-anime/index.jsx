import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/button/";

import * as C from "./style";

function CharactersAnime({ characters, id }) {
  return (
    <C.CharactersContainer>
      <C.ListItems>
        {characters.map((characters) => (
          <C.ListItem key={characters.id}>
            <C.CharactersImage src={characters.character.images.jpg.image_url} alt={"characters " + characters.character.name} />
          </C.ListItem>
        )
        )}
      </C.ListItems>

      <Link to={`/catalog/${id}/characters`}>
        <Button >
          see more
        </Button>
      </Link>
    </C.CharactersContainer>
  );
}

export default CharactersAnime;
