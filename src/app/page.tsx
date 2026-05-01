import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Marquee from "@/components/Marquee/Marquee";
import About from "@/components/About/About";
import Projects from "@/components/Projects/Projects";
import TechStack from "@/components/TechStack/TechStack";
import FeaturedBlog from "@/components/FeaturedBlog/FeaturedBlog";
import CoreCommitments from "@/components/CoreCommitments/CoreCommitments";
import MiniGame from "@/components/MiniGame/MiniGame";
import ContactFooter from "@/components/ContactFooter/ContactFooter";

export default function Home() {
  return (
    <main style={{ backgroundColor: "#050505", minHeight: "100vh", paddingTop: "97px" }}>
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Projects />
      <TechStack />
      {/* <FeaturedBlog /> */}
      {/* <CoreCommitments /> */}
      <MiniGame />
      <ContactFooter />
    </main>
  );
}
