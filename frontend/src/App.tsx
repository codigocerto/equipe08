import { GlobalStyle } from './styles'
import Header from './components/Header'
import Home from './pages/Home'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Home />
      <Footer />
    </>
  );
}

export default App
