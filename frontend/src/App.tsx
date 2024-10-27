import { BrowserRouter } from 'react-router-dom'

import { GlobalStyle } from './styles'

import AppRoutes from './routes'

import Header from './components/Header'
import Footer from './components/Footer'
import Modal from './components/Modal'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Modal />
        <Header />
        <AppRoutes />
        <Footer />
    </BrowserRouter>
  );
}

export default App;