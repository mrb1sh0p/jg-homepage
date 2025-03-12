import React from "react";
import Sidebar from "./components/Sidebar";
import { Routes, Route, useLocation } from "react-router-dom";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Projects from "./pages/project/Projects";
import Posts from "./pages/posts/Posts";
import Footer from "./components/Footer";
import Article from "./components/Article";
import MouseLightEffect from "./components/MouseLightEffect"; // Importa o efeito
import { AnimatePresence } from "framer-motion";

export default function App() {
  const location = useLocation();

  return (
    <div className="app">
      <MouseLightEffect />
      <div className="layout">
        <aside className="sidebar-wrapper">
          <Sidebar />
        </aside>
        <main className="content-wrapper">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route
                path="/"
                element={
                  <Article>
                    <About />
                  </Article>
                }
              />
              <Route
                path="/contact"
                element={
                  <Article>
                    <Contact />
                  </Article>
                }
              />
              <Route
                path="/projects"
                element={
                  <Article>
                    <Projects />
                  </Article>
                }
              />
              <Route
                path="/posts"
                element={
                  <Article>
                    <Posts />
                  </Article>
                }
              />
            </Routes>
          </AnimatePresence>
        </main>
      </div>
      <Footer />
    </div>
  );
}
