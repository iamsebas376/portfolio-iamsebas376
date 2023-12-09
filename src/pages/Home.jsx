import React from "react";
import HomeSection1 from "../components/HomeSection1";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import ContactBanner from "../components/ContactBanner";

function Home() {
  return (
    <div>
      <HomeSection1 />
      <AboutSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ContactBanner />
    </div>
  );
}

export default Home;
