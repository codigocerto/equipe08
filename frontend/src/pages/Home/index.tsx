import Hero from "../../components/Hero";
import ScrollButton from "../../components/ScrollButton";
import InfosSection from "../../components/InfosSection";
import PhraseSection from "../../components/PhraseSection";
import Trails from "../Trails";
import Typography from "../../components/Typography";

const Home = () => {
  return (
    <>
      <Hero />
      <ScrollButton />
      <InfosSection />
      <Trails />
      <PhraseSection />
      <Typography />
    </>
  );
};

export default Home;
