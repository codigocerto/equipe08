import Hero from "../../components/Hero";
import ScrollButton from "../../components/ScrollButton";
import InfosSection from "../../components/InfosSection";
import PhraseSection from "../../components/PhraseSection";
import Trails from "../Trails";

const Home = () => {
  return (
    <div id="home">
      <Hero />
      <ScrollButton />
      <InfosSection />
      <Trails />
      <PhraseSection />
    </div>
  );
};

export default Home;
