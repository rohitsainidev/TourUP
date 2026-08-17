import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Gallery from "./components/Gallery/Gallery";
import GalleryDetails from "./pages/Gallery/GalleryDetails";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./components/Home/Home";
import Places from "./components/Places/Places";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

import Agra from "./pages/Agra/Agra";
import Varanasi from "./pages/varanasi/Varanasi";
import Ayodhya from "./pages/ayodhya/ayodhya";
import Lucknow from "./pages/lucknow/lucknow";

import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const location = useLocation();

  const isAuthPage =
    location.pathname === "/login" ||
    location.pathname === "/signup";

  return (
    <div className="app-container">

      <ScrollToTop />

      {!isAuthPage && <Navbar />}

      <main className="main-content">

        <Routes>

          <Route
            path="/"
            element={
              <>
                <Home />
                <Gallery />
                <About />
                <Contact />
              </>
            }
          />

          <Route path="/home" element={<Home />} />

          <Route path="/places" element={<Places />} />

          <Route path="/agra" element={<Agra />} />

          <Route path="/varanasi" element={<Varanasi />} />

          <Route path="/ayodhya" element={<Ayodhya />} />

          <Route path="/lucknow" element={<Lucknow />} />

          <Route path="/gallery" element={<Gallery />} />

          <Route
            path="/gallery/:place"
            element={<GalleryDetails />}
          />

          <Route path="/about" element={<About />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="/login" element={<Login />} />

          <Route path="/signup" element={<Signup />} />

        </Routes>

      </main>

      {!isAuthPage && <Footer />}

    </div>
  );
}