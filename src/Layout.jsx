import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Preloader from "./components/Preloader";
import Cursor from "./components/Cursor";
import ErrorBoundary from "./components/Errorboundary";
import { startSmoothScroll, getLenis } from "./lib/smoothScroll";

export default function Layout() {
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
    <React.StrictMode>
      {loading && <Preloader onDone={() => setLoading(false)} />}
      <Cursor />
      <ErrorBoundary>
        <Outlet />
      </ErrorBoundary>
    </React.StrictMode>
  );
}