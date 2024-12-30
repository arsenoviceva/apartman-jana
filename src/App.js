import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Header } from "./layout/Header";
import { Home } from "./app/home/Home";
import { Footer } from "./layout/Footer";
import { Gallery } from "./app/gallery/Gallery";
import { Contact } from "./app/contact/Contact";
import { useCookies } from "react-cookie";
import { CookieConsent } from "./CookieConsent";
import { Cookiepolicy } from "./Cookiepolicy";

function App() {
  const [cookies] = useCookies(["cookieConsent"]);
  return (
    <div className="main-container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<Cookiepolicy />} />
        </Routes>
        <Footer />
      </BrowserRouter>

      {!cookies.cookieConsent && <CookieConsent />}
    </div>
  );
}
export default App;
