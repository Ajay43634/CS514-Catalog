import { useState } from "react";
import Navbar from "./components/Navbar";
import CourseCatalog from "./pages/CourseCatalog";
import Overview from "./pages/Overview";
import About from "./pages/About";
import Blog from "./pages/Blog";
import ProjectFiles from "./pages/ProjectFiles";
import "./App.css";
import "./App.css";

export default function App() {
  const [activePage, setActivePage] = useState("catalog");

  return (
    <div className="app">
      <Navbar
        activePage={activePage}
        onNavigate={setActivePage}
      />
      <main id="main-content" className="main-content">
        {activePage === "catalog" && <CourseCatalog />}
        {activePage === "overview" && <Overview />}
        {activePage === "about" && <About />}
        {activePage === "blog" && <Blog />}
        {activePage === "files" && <ProjectFiles />}
      </main>
    </div>
  );
}