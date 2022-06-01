import React from "react";
import Header from "./Header/Header";
import Season_Later from "../Season_Later/Season_Later";

import Manga from "../Manga/Manga";
import Action from "../Action/Action";
import Footer from './Footer/Footer'

function Layout() {
    return <>
        <Header />
        <Season_Later />
        <Action />
        {/* <Manga /> */}
        <Footer />
    </>;
}

export default Layout;
