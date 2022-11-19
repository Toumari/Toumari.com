import "./Portfolio.css";
import Toumari from "../assets/Toumari.com.jpg";
import DBD from "../assets/dbd.webp";

export default function Portfolio() {
  return (
    <div className="portfolio">
      <h1 className="portfolio__title">Portfolio</h1>
      <p className="portfolio__subtitle">Get to know my products</p>
      <div className="portfolio__container">
        <div className="portfolio__item">
          <a href="https://github.com/Toumari/Toumari.com">
            <img className="portfolio__img" src={Toumari} alt="portfolio" />
            <div className="porfolio__info">
              <h3 className="portfolio__item-title">Toumari.com</h3>
              <p className="portfolio__item-subtitle">
                My personal portfolio website! I built this website using React
              </p>
            </div>
          </a>
        </div>
        <div className="portfolio__item">
          <a href="https://github.com/Toumari/Playwright-TS-POC">
            <img
              className="portfolio__img"
              src="https://images.unsplash.com/photo-1594904351111-a072f80b1a71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
              alt="portfolio"
            />
            <div className="porfolio__info">
              <h3 className="portfolio__item-title">Playwright POC</h3>
              <p className="portfolio__item-subtitle">
                A proof of concept for an automation Framework using Playwright
              </p>
            </div>
          </a>
        </div>
        <div className="portfolio__item">
          <a href="https://github.com/Toumari/PerkLight">
            <img className="portfolio__img" src={DBD} alt="portfolio" />
            <div className="porfolio__info">
              <h3 className="portfolio__item-title">
                PerkLight: Flutter Game Companion
              </h3>
              <p className="portfolio__item-subtitle">
                A cross platform companion app for a popular asymmetrical horror
                game
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
