import Image from 'next/image'
import Navbar from "../components/molecules/Navbar/Navbar";
import Hero from "../components/molecules/Hero";
import FeaturesSection from "../components/molecules/Sections/Features";
import RevolutionSection from "../components/molecules/Sections/RevolutionSection";
import Footer from "../components/molecules/Footer";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturesSection/>
      <RevolutionSection/>
      <Footer/>
    </>
  )
}
