import { Route, Routes } from "react-router-dom";

import Layout from "./Layout/Layout.jsx";
import HomePage from "./pages/HomePage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import PortfolioPage from "./pages/PortfolioPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/Me" element={<HomePage />} />
          <Route path="/Me/contact" element={<ContactPage />} />
          <Route path="/Me/portfolio" element={<PortfolioPage />} />
          <Route path="/Me/about-me" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
