import React from "react";
import Experties from "./components/Experties/Experties";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import People from "./components/People/People";
import Portfolio from "./components/Portfolio/Portfolio";
import Work from "./components/Work/Work";
import css from "./styles/App.module.scss";
import Prodcts from "./components/Products/Prodcts";
import Contacts from "./components/Contacts/Contacts";
const App = () => {
  
  return (
    <div className={`bg-primary ${css.container}`}>
      <Header />
      <Hero />
      <Prodcts />
      <Experties />
      <Work />
      <Portfolio />
      <People />
      <Contacts />
      <Footer />
    </div>
  );
};

export default App;
