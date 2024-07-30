import Footer from "./components/Footer";
import Header from "./components/Header";
import Login from "./pages/Login/index";
import { GlobalStyle } from "./styles";


function App() {
  return (
    <>
      <GlobalStyle />
      <Header/>
      <Login />
      <Footer/>
    </>
  );
}

export default App
