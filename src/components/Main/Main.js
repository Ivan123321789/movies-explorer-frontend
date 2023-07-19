import React from "react";
import Promo from './Promo/Promo';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import AboutMe from './AboutMe/AboutMe';
import Portfolio from './Portfolio/Portfolio';
import Header from '../Header/Header';
import HeaderMovie from "../Header/HeaderMovie";
import Footer from '../Footer/Footer';

function Main({onBurgerClick}) {
  return (
    <>
      <main>
        <Header />
        <HeaderMovie onBurgerClick={onBurgerClick}/>
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
        <Footer />
      </main>
    </>
  );
}

export default Main;