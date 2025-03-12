import React from "react";
import Sidebar from "./components/Sidebar";
import { Routes, Route } from "react-router-dom";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Jobs from "./pages/jobs/JobsPage";
import LinksPage from "./pages/links/Links";
import Posts from "./pages/posts/Posts";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="app">
      <div className="layout">
        <aside className="sidebar-wrapper">
          <Sidebar />
        </aside>
        <main className="content-wrapper">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/links" element={<LinksPage />} />
            <Route path="/posts" element={<Posts />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </div>
  );
}
