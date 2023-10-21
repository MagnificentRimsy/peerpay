import Image from 'next/image'
import Navbar from "../components/molecules/Navbar/Navbar";
import Hero from "../components/molecules/Hero";
import FeaturesSection from "../components/molecules/Sections/Features";

export default function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <FeaturesSection/>
    </>
  )
}
