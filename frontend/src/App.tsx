import { BrowserRouter } from 'react-router-dom'

import { GlobalStyle } from './styles'

import AppRoutes from './routes'

import Header from './components/Header'
import Footer from './components/Footer'
import { UserContextProvider } from './contexts/userContext'
import { ToastContainer, Slide } from 'react-toastify'

function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <GlobalStyle />
          <Header />
          <AppRoutes />
          <Footer />
      </BrowserRouter>
      <ToastContainer
        autoClose={2000}
        position="top-right"
        transition={Slide}  // Define o tipo de transição de animação
        style={{ width: "auto", height: "auto"}}
      />
    </UserContextProvider>
  );
}

export default App;