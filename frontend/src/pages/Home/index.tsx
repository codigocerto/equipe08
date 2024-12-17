import Hero from "../../components/Hero";
import TranslationButton from "../../components/TranslationButton";
import ScrollButton from "../../components/ScrollButton";
import InfosSection from "../../components/InfosSection";
import PhraseSection from "../../components/PhraseSection";
import Trails from "../Trails";

const Home = () => {
  return (
    <div id="home">
      <Hero />
      <TranslationButton />
      <ScrollButton />
      <InfosSection />
      <Trails />
      <PhraseSection />
    </div>
  );
};

export default Home;
