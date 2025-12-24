import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Stats from "./components/stats";
import About from "./components/about";
import Rooms from "./components/rooms";
import Facilities from "./components/facilities";
import Location from "./components/location";
import Testimoni from "./components/testimoni";
import Cta from "./components/cta";
import FAQ from "./components/faq";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Rooms />
      <Facilities />
      <Location />
      <Testimoni />
      <Cta />
      <FAQ />
    </div>
  );
}
