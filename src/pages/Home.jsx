import Navbar from "../components/Navbar";
import WhatIDo from "../components/WhatIdo";
import Footer from "../components/Footer";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import About from "./About";
import SkillsPage from "../components/Skills";
import LandingPage from "./LandingPage";
const Home = () => (
  <>
    <Navbar />
    {/* Hero Section */}
    <LandingPage />
    <WhatIDo />
    <SkillsPage />
    <Portfolio id="portfolio" />
    <About />
    <Contact />
    {/* Footer */}
    <Footer />
  </>
);

export default Home;
