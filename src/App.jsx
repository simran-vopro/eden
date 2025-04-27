import React, { useEffect, useRef } from "react";
import "./App.css";
import Lenis from "lenis";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import LandingPage from "./screens/landing";
import Insights from "./screens/insights";

const ScrollManager = ({ children }) => {
  const lenisRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smooth: true,
      direction: "vertical",
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    lenisRef.current = lenis;

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    // After route change, scroll to top
    lenisRef.current?.scrollTo(0, { immediate: true });
  }, [location.pathname]);

  return <>{children}</>;
};

const App = () => {
  return (
    <Router>
      <ScrollManager>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/insights" element={<Insights />} />
        </Routes>
      </ScrollManager>
    </Router>
  );
};

export default App;
