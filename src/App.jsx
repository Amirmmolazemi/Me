import { Route, Routes } from "react-router-dom";

import Layout from "./Layout/Layout.jsx";
import HomePage from "./pages/HomePage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/Me" element={<HomePage />} />
          <Route path="/Me/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
