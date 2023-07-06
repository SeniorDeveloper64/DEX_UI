import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import { useEffect } from "react";
import WOW from "wow.js";
import HomeTwo from "./pages/Home/HomeTwo";
import Blog from "./pages/Blog/Blog";
import AboutUs from "./pages/AboutUs/AboutUs";
import LaunchApp from "./pages/LaunchApp/LaunchApp";
//import BlogDetailsPage from "./pages/BlogDetails/BlogDetailsPage";
import LitePaperPage from "./pages/LitePaper/LitePaperPage";
import { useLocation } from "react-router-dom";

function App() {
  useEffect(() => {
    const wow = new WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 0,
      mobile: false,
      live: true,
    });
    wow.init();
  }, []);

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="launch-app" element={<LaunchApp />} />
        <Route path="home-two" element={<HomeTwo />} />
        <Route path="blog" element={<Blog />} />
        <Route path="litepaper" element={<LitePaperPage />} />
      </Routes>
    </>
  );
}

export default App;
