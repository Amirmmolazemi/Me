import { IoLogoInstagram } from "react-icons/io5";
import { FaTelegram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <a href="#" className={styles.logo}>
          Amirmohammad Molazemi
        </a>
        <nav className={styles.navbar}>
          <a href="#home">Home</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <main>{children}</main>
      <footer className={styles.footer}>
        <a href="https://instagram.com/amir341mohamad">
          <IoLogoInstagram />
        </a>
        <a href="https://t.me/Amir341mohamad">
          <FaTelegram />
        </a>
        <a href="https://www.linkedin.com/in/amirmmolazemi">
          <FaLinkedin />
        </a>
        <a href="https://wa.me/+989368709759">
          <FaWhatsapp />
        </a>
      </footer>
    </>
  );
}

export default Layout;
