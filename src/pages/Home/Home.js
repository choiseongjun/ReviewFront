import React from 'react';
import MainVisual from '../../containers/home/MainVisual';
import NewServiceNav from '../../containers/home/NewServiceNav';
import Recommand from '../../containers/home/Recommand';

function Home() {
  return (
    <>
      <main>
        <MainVisual />
        <NewServiceNav />
        <Recommand />
      </main>
    </>
  );
}

export default Home;
