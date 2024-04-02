import { Link } from "react-router-dom";

function Header({ styles }) {
  return (
    <header className={styles.header}>
      <h3 className={styles.logo}>Amirmohammad Molazemi</h3>
      <nav className={styles.navbar}>
        <Link to="/Me">Home</Link>
        <Link to="/Me/portfolio">Portfolio</Link>
        <Link to="/Me/about-me">About</Link>
        <Link to="/Me/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
