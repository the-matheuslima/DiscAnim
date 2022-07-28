import React from "react";
import Header from "../../components/header";
import UpcomingList from "../../components/upcoming-list";
import ActionList from "../../components/action-list";

function Home() {
  return (
    <>
      <Header />
      <UpcomingList />
      <ActionList />
    </>
  );
}

export default Home;
