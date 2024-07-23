import { GlobalStyle } from "./styles";
import Header from "./components/Header";
import Trails from "./pages/Trails";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import PhraseSection from "./components/PhraseSection";
function App() {
  return (
    <>
      <Header></Header>
      <GlobalStyle />
      <Home></Home>
      <Trails></Trails>
      <PhraseSection></PhraseSection>
      <Footer></Footer>
    </>
  );
}

export default App;
