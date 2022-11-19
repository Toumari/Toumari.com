import "./hamburger.css";
export default function hamburger(props) {
  const toggleActiveHamburger = () => {
    const hamburger = document.querySelector(".hamburger");
    hamburger.classList.toggle("active");
    const bg = document.createElement("div");
  };

  return (
    <div className="hamburger-container" onClick={props.onClick}>
      <div className={props.hamburgerActive ? "hamburger active" : "hamburger"}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </div>
  );
}
