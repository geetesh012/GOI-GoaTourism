import { useState, useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Preloader from "./components/Preloader";
import Cursor from "./components/Cursor";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Highlight from "./pages/Highlight";
import { startSmoothScroll, getLenis } from "./lib/smoothScroll";

export default function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    startSmoothScroll();
  }, []);

  useEffect(() => {
    getLenis()?.scrollTo(0, { immediate: true });
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      {loading && <Preloader onDone={() => setLoading(false)} />}
      <Cursor />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations/:slug" element={<Project />} />
        <Route
          path="/destinations/:slug/:highlightSlug"
          element={<Highlight />}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}