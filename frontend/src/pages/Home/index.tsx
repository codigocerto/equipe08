import Hero from "../../components/Hero";
import ScrollButton from "../../components/ScrollButton";
import InfosSection from "../../components/InfosSection";
import PhraseSection from "../../components/PhraseSection";
import Trails from "../Trails";

const Home = () => {
  return (
    <>
      <Hero />
      <ScrollButton />
      <InfosSection />
      <Trails />
      <PhraseSection />
    </>
  );
};

export default Home;
