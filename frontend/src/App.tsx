import { BrowserRouter } from 'react-router-dom'

import { GlobalStyle } from './styles'

import AppRoutes from './routes'

import Header from './components/Header'
import Footer from './components/Footer'
import { UserContextProvider } from './contexts/userContext'

function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <GlobalStyle />
          <Header />
          <AppRoutes />
          <Footer />
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;