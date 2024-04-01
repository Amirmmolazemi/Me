import { useTitle } from "../hooks/useTitle.js";

import { Link } from "react-router-dom";

import styles from "./styles/HomePage.module.css";

import picture from "../assets/picture.jpg";

function HomePage() {
  useTitle("Home")
  return (
    <div className={styles.home}>
      <div className={styles.homeContent}>
        <h1>hi , i'm amirmohammad</h1>
        <h3>FrontEnd Developer</h3>
        <p>
          Hi everyone ! I'm AmirMohammad and i tend to develop myself at
          front-end developing to become professional 😊
          <br />
          check my CV on About Tab And also you can Contact with me 📞
        </p>
        <div className={styles.btnBox}>
          <Link to="/Me">My CV</Link>
          <Link to="/Me/contact">Let's talk</Link>
        </div>
      </div>
      <div className={styles.homeImage}>
        <img src={picture} alt="picture" />
      </div>
    </div>
  );
}

export default HomePage;
