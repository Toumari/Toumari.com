import "./heroImageSection.css";

import Github from "../assets/github-11-xxl.webp";
import Twitter from "../assets/twitter2.webp";
import { Link } from "react-router-dom";
export default function HeroImageSection() {
  return (
    <div className="hero-image-section">
      <div className="hero-image-section__text">
        <h1>
          Jack Williams
          <br />
        </h1>
        <p className="hero-image-section__subtitle">
          Senior Software Engineer In Test
        </p>
        <div className="hero-image-section__social">
          <p className="instagram__handle">
            <img src={Github} alt="Github" className="github__icon" />
            <a href="https://github.com/Toumari">Toumari</a>
          </p>
          <p className="instagram__handle">
            <img src={Twitter} alt="Github" className="github__icon" />
            <a href="https://twitter.com/jackimas141">@jackimas141</a>
          </p>
        </div>
        <Link className="explore-btn" to={"/portfolio"}>
          Explore My Work
        </Link>
      </div>
    </div>
  );
}
