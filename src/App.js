import './styles/index.scss';
import Header from './components/Header';
import HeroSection from './components/HeroSection';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <div className="content"></div>
    </div>
  );
}

export default App;
