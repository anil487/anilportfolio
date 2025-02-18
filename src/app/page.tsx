import Footer from "./components/footer";
import { Header } from "./components/header";
import Hero from "./components/hero";
import ProjectShowcase from "./components/projectcard";
import Services from "./components/servicescard";

export default function Home() {
  return (
   <>
   <Header />
   <Hero />
   <Services />
   <ProjectShowcase />
   <Footer />
   </>
  );
}
