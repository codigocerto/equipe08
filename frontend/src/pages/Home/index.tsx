import Hero from "../../components/Hero";
import ScrollButton from "../../components/ScrollButton";
import InfosSection from "../../components/InfosSection";
import PhraseSection from "../../components/PhraseSection";
import Trails from "../Trails";
import ContactForm from "../../components/ContactForm";

const Home = () => {
  return (
    <div id="home">
      <Hero />
      <ScrollButton />
      <InfosSection />
      <Trails />
      <PhraseSection />
      <ContactForm />
    </div>
  );
};

export default Home;
