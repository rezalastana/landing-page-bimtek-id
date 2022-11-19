import React from 'react';

import Header from '../partials/Header';
import HeroHome from '../partials/HeroHome';
// import FeaturesHome from '../partials/Features';
import Galeri from '../partials/Galeri';
import Narasumber from '../partials/Narasumber';
import DaftarBLUD from '../partials/DaftarBLUD';
import DaftarBUMD from '../partials/DaftarBUMD';
import Footer from '../partials/Footer';
import Support from '../partials/Support';
import Features from '../partials/Features';

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <HeroHome />
        <Galeri />
        {/* <Narasumber /> */}
        <DaftarBLUD />
        <DaftarBUMD />
        <Support />
        {/*<Features />*/}


      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Home;