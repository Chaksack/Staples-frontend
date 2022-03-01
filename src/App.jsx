import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Brand from './pages/Brand';
import SiteMap from './pages/SiteMap';
import Special from './pages/Special';
import Details from './pages/Details';
import Products from './pages/Products';

function App() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
