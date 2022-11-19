import "./HeroDescription.css";
import { Link } from "react-router-dom";

export default function HeroDescription() {
  return (
    <div className="hero-description">
      <div className="hero-description-text">
        <h1>Why Hello There</h1>
        <h2>Welcome to my site!</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
          voluptatibus, quae, veniam, quibusdam voluptate harum autem
          necessitatibus quod doloremque ipsa voluptates. Quae, voluptate
          voluptates. Quae, voluptate voluptates.
        </p>
      </div>
      <button className="explore-btn">
        <Link to={"/portfolio"}>Explore My Work</Link>
      </button>
    </div>
  );
}
