import React from "react";
import MainVisual from "../../components/home/MainVisual";
import NewServiceNav from "../../components/home/NewServiceNav";
import Recommand from "../../components/home/Recommand";

export default () => {
  return (
    <>
      <main>
        <MainVisual />
        <NewServiceNav />
        <Recommand />
      </main>
    </>
  );
};
