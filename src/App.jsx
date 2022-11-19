import { useState } from "react";
import HeroImageSection from "./components/heroImageSection";
import Hamburger from "./components/hamburger";
import SideMenu from "./components/SideMenu";
import HeroDescription from "./components/HeroDescription";
import AboutImageCollage from "./components/AboutImageCollage";
import Portfolio from "./components/Portfolio";
import ContactMe from "./components/ContactMe";
import { Router, Routes, Route } from "react-router-dom";
import TopNav from "./components/TopNav";
import "./App.css";

function App() {
  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  const [hamburgerActive, setHamburgerActive] = useState(false);

  function toggleSideMenu() {
    console.log("Clicked!");
    setSideMenuOpen((prev) => !prev);
    setHamburgerActive((prev) => !prev);
  }

  return (
    <div className="App">
      <Hamburger
        onClick={toggleSideMenu}
        sideMenuOpen={sideMenuOpen}
        hamburgerActive={hamburgerActive}
      />
      <SideMenu
        sideMenuOpen={sideMenuOpen}
        setSideMenuOpen={setSideMenuOpen}
        setHamburgerActive={setHamburgerActive}
      />

      <Routes>
        <Route
          path="/"
          exact
          element={
            <div className="content">
              <HeroImageSection />
              <div className="desc">
                <TopNav />
              </div>
            </div>
          }
        />
        <Route
          path="/about"
          element={
            <div className="content">
              <TopNav />
              <div>
                <AboutImageCollage />
              </div>
            </div>
          }
        />
        <Route
          path="/portfolio"
          element={
            <div className="content">
              <TopNav />
              <Portfolio />
            </div>
          }
        />
        <Route
          path="/contact"
          element={
            <div className="content">
              <TopNav />
              <ContactMe />
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
