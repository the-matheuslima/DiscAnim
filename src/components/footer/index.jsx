import React from "react";
import * as C from "./style";

function Footer() {
  return (
    <C.FooterContent>
      <C.IconFooter href="https://github.com/the-matheuslima/"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="github" /></C.IconFooter>
      <C.CodedBy>Coded by <a target="__blank" rel="author" href="https://github.com/the-matheuslima" className="author">Matheus Lima</a>.</C.CodedBy>
      <C.IconFooter href="https://www.linkedin.com/in/matheus-lima-the-dev/"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg" alt="" /></C.IconFooter>

    </C.FooterContent>
  );
}

export default Footer;
