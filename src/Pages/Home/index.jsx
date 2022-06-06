import React from "react";
import Header from '../../Layout/Header'
import Season_Later from "../../components/Season_Later";
import Action from "../../components/Action";


function Home() {
    return (
        <>
            <Header />
            <Season_Later />
            <Action />
        </>
    );
}

export default Home;
