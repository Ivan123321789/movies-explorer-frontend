import React from "react";
import Promo from './Promo/Promo';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import AboutMe from './AboutMe/AboutMe';
import Portfolio from './Portfolio/Portfolio';
import Header from '../Header/Header';
import HeaderMovie from "../Header/HeaderMovie";
import Footer from '../Footer/Footer';

function Main({isLoggedIn}) {
  return (
    <>
      { isLoggedIn ? (<HeaderMovie />) : (<Header />)}
      <main>
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </main>
      <Footer />
    </>
  );
}

export default Main;