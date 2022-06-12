import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/Button/index";
import { CharactersContainer, CharactersImage, ListItem, ListItems } from "./style";

function index({ characters, id }) {
  return (
    <CharactersContainer>
      <ListItems>
        {characters.map((characters) => {
          return (
            <ListItem key={characters.id}>
              <CharactersImage src={characters.character.images.jpg.image_url} alt={"characters " + characters.character.name} />
            </ListItem>
          );
        })}
      </ListItems>

      <Link to={`/detalins/${id}/characters`}>
        <Button text={"ver mais"} />
      </Link>
    </CharactersContainer>
  );
}

export default index;
