import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./components/Home/Home";
import Gallery from "./components/Gallery/Gallery";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Places from "./components/Places/Places";
import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton";

import GalleryDetails from "./pages/Gallery/GalleryDetails";
import GalleryHub from "./pages/Gallery/GalleryHub";
import Agra from "./pages/Agra/Agra";
import Varanasi from "./pages/varanasi/Varanasi";
import Ayodhya from "./pages/ayodhya/ayodhya";
import Lucknow from "./pages/lucknow/lucknow";

import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";

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
      const timer = setTimeout(() => {
        if (targetId === "home") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          const element = document.getElementById(targetId);
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }
      }, 100);

      return () => clearTimeout(timer);
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
  const location = useLocation();

  const isAuthPage =
    location.pathname === "/login" ||
    location.pathname === "/signup";

  return (
    <div className="app-container">
      <ScrollHandler />

      {!isAuthPage && <Navbar />}

      <main className="main-content">
        <Routes>
          {/* Unified Single-Page Routes */}
          <Route path="/" element={<SinglePageHome />} />
          <Route path="/home" element={<SinglePageHome />} />
          <Route path="/about" element={<SinglePageHome />} />
          <Route path="/contact" element={<SinglePageHome />} />

          {/* Dedicated Subpages */}
          <Route path="/gallery" element={<GalleryHub />} />
          <Route path="/gallery/:place" element={<GalleryHub />} />
          <Route path="/places" element={<Places />} />
          <Route path="/agra" element={<Agra />} />
          <Route path="/varanasi" element={<Varanasi />} />
          <Route path="/ayodhya" element={<Ayodhya />} />
          <Route path="/lucknow" element={<Lucknow />} />

          {/* Auth Pages */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </main>

      {!isAuthPage && <Footer />}

      <WhatsAppButton />
    </div>
  );
}