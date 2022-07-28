import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../button/";

import * as C from "./style";

function Navbar() {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <C.NavContent>
      <Link to="/">
        <C.Logo>DiscAnim</C.Logo>
      </Link>

      <C.Form>
        <C.Input
          type="text" value={search} onChange={handleSearch} placeholder='search anime'
        />

        <Link to={`/${search}`}>
          <Button onClick={handleSearch}>
            search
          </Button>
        </Link>
      </C.Form>
    </C.NavContent>
  );
}

export default Navbar;
