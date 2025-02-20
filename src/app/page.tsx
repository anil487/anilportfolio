
import ContactForm from "./components/contactform";
import Container from "./components/container";
import Hero from "./components/hero";
import ProjectShowcase from "./components/projectcard";
import Services from "./components/servicescard";

export default function Home() {
  return (
   <>
   <Container>
   <Hero />
   <Services />
   <ProjectShowcase />
   <ContactForm />
   </Container>
   
   
   </>
  );
}
