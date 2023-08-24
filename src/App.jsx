import './App.styled.js';
import { Container } from './App.styled.js';
import Footer from './components/Footer/Footer.jsx';
import Header from './components/Header/Header.jsx';
import MainPage from './pages/MainPage.jsx';
import { GlobalStyles } from './styles/GlobalStyles.js';

function App() {
  return (
    <Container>
      <GlobalStyles />
      <Header />
      <main>
        <MainPage />
      </main>
      <Footer />
    </Container>
  );
}

export default App;
