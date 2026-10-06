import { useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./components/Home/Home";
import Gallery from "./components/Gallery/Gallery";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton";
import GalleryHub from "./pages/Gallery/GalleryHub";
import Agra from "./pages/Agra/Agra";
import Varanasi from "./pages/varanasi/Varanasi";
import Ayodhya from "./pages/ayodhya/ayodhya";
import Lucknow from "./pages/lucknow/lucknow";
import Packages from "./pages/Packages/Packages";

function ScrollHandler() {
  const location = useLocation();

  useEffect(() => {
    let targetId = location.state?.scrollTo;

    if (!targetId && location.hash) {
      targetId = location.hash.replace("#", "");
    }

    if (!targetId) {
      if (location.pathname === "/about") targetId = "about";
      else if (location.pathname === "/contact") targetId = "contact";
      else if (location.pathname === "/home") targetId = "home";
    }

    if (targetId) {
      if (targetId === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      let retries = 0;
      const maxRetries = 20;
      let timerId = null;

      const tryScroll = () => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        } else if (retries < maxRetries) {
          retries++;
          timerId = setTimeout(tryScroll, 60);
        }
      };

      timerId = setTimeout(tryScroll, 50);
      return () => {
        if (timerId) clearTimeout(timerId);
      };
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash, location.state]);

  return null;
}

const SinglePageHome = () => (
  <>
    <Home />
    <Gallery />
    <About />
    <Contact />
  </>
);

export default function App() {
  return (
    <div className="app-container">
      <ScrollHandler />

      <Navbar />

      <main className="main-content">
        <Routes>
          {/* Unified Single-Page Routes */}
          <Route path="/" element={<SinglePageHome />} />
          <Route path="/home" element={<SinglePageHome />} />
          <Route path="/about" element={<SinglePageHome />} />
          <Route path="/contact" element={<SinglePageHome />} />

          {/* Dedicated Subpages */}
          <Route path="/packages" element={<Packages />} />
          <Route path="/packages/:destination" element={<Packages />} />
          <Route path="/gallery" element={<GalleryHub />} />
          <Route path="/gallery/:place" element={<GalleryHub />} />
          <Route path="/places" element={<Navigate to="/packages" replace />} />
          <Route path="/agra" element={<Agra />} />
          <Route path="/varanasi" element={<Varanasi />} />
          <Route path="/ayodhya" element={<Ayodhya />} />
          <Route path="/lucknow" element={<Lucknow />} />
        </Routes>
      </main>

      <Footer />

      <WhatsAppButton />
    </div>
  );
}