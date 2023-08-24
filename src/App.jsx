import './AppStyle.styled.js';
import { Container } from './AppStyle.styled.js';
import Footer from './components/Footer/Footer.jsx';
import Header from './components/Header/Header.jsx';
import MainPage from './pages/MainPage.jsx';
import { GlobalStyles } from './style/GlobalStyles.js';

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
