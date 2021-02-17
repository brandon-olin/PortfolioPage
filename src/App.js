import './styles/index.scss';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
    </div>
  );
}

export default App;
