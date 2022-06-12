import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavContent, Logo, Form, Input, Button } from "./styled";

function index() {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <NavContent>
      <Link to="/">
        <Logo>DiscAnim</Logo>
      </Link>

      <Form>
        <Input
          type="text" value={search} onChange={handleSearch} placeholder='search anime'
        />

        <Link to={`/${search}`}>
          <Button onClick={handleSearch}>
            search
          </Button>
        </Link>
      </Form>
    </NavContent>
  );
}

export default index;
