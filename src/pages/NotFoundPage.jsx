import { Link } from "react-router-dom";
import { useTitle } from "../hooks/useTitle.js";

import styles from "./styles/NotFoundPage.module.css";
import picture from "../assets/404-page-not-found.svg";

function NotFoundPage() {
  useTitle("404");
  return (
    <div className={styles.container}>
      <img src={picture} alt="notFound" />
      <h1>404</h1>
      <p>Oops! Page Not Found</p>
      <Link to="/Me">Go Back To Homepage</Link>
    </div>
  );
}

export default NotFoundPage;
