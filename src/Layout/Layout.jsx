import styles from "./Layout.module.css";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Layout({ children }) {
  return (
    <>
      <Header styles={styles} />
      <main className={styles.main}>{children}</main>
      <Footer styles={styles} />
    </>
  );
}

export default Layout;
