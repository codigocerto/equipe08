import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import { GlobalStyle } from "./styles";


function App() {
  return (
    <>
      <GlobalStyle />
      <Header/>
      <Home/> 
      <Footer/>
    </>
  );
}

export default App
