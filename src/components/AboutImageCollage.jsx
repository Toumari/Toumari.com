import Collage from "../assets/collage.png";
import "./AboutImageCollage.css";
import Profile from "../assets/profile.jpg";

export default function AboutImageCollage() {
  return (
    <div className="about__me">
      <h1 className="about_me__title">About Me</h1>
      <p className="about_me__subtitle">Get to know me a little better!</p>
      <div className="about_me__container">
        <img src={Profile} alt="" className="profile__img" />
        <div className="about_me__text">
          <p>
            I am a hobbyist full stack web developer with a background in
            photography and graphic design. I have a passion for creating
            beautiful and functional websites. I am a self-taught developer.
          </p>
        </div>
      </div>
    </div>
  );
}
