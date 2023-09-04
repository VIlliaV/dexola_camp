import './App.styled.js';
import { Container } from './App.styled.js';
import Footer from './components/Footer/Footer.jsx';
import Header from './components/Header/Header.jsx';
import MainPage from './pages/MainPage.jsx';
import { GlobalStyles } from './styles/GlobalStyles.js';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <Container>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          duration: 2000,
          style: {
            background: 'rgb(250, 250, 250)',
            color: 'rgb(30, 31, 40)',
          },
        }}
      />
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
