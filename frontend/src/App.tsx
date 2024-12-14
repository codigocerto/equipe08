import Header from "./components/Header";
import Footer from "./components/Footer";
import { UserContextProvider } from "./contexts/userContext";
import { ToastContainer, Slide } from "react-toastify";

import { GlobalStyle } from "./styles";
import Home from "./pages/Home";
import Trails from "./pages/Trails";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <UserContextProvider>
      <GlobalStyle />
      <Header />
      <Home />
      <Trails />
      <ContactForm />
      <Footer />
      <ToastContainer
        autoClose={2000}
        position="top-right"
        transition={Slide}
        style={{ width: "auto", height: "auto" }}
      />
    </UserContextProvider>
  );
}

export default App;
