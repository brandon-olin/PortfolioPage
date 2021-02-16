import './styles/index.scss';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <AboutSection />
    </div>
  );
}

export default App;
