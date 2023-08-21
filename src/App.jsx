import './App.styled.jsx';
import { Container } from './App.styled.jsx';
import Footer from './components/Footer/Footer.jsx';
import Header from './components/Header/Header.jsx';
import MainPage from './pages/MainPage.jsx';

function App() {
  return (
    <Container>
      <Header />
      <main>
        <MainPage />
      </main>
      <Footer />
    </Container>
  );
}

export default App;
