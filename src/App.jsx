import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Brand from './pages/Brand';

function App() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
