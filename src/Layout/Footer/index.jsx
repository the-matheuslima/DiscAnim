import React from "react";
// import "./style.scss";
import { FooterContent, CodedBy } from "./style";

function index() {
  return (
    <FooterContent>
      <CodedBy>Coded by <a target="__blank" rel="author" href="https://github.com/the-matheuslima" className="author">Matheus Lima</a>.</CodedBy>
    </FooterContent>
  );
}

export default index;
