
import './styles/App.scss';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from './components/Home'
import Headers from './components/Header'
import Footer from './components/Footer';
import Services from './components/Services';
import Contact from './components/Contact';

import "./styles/Header.scss"
import"./styles/Home.scss"
import "./styles/contact.scss"
import "./styles/Footer.scss"
import "./styles/mediaquery.scss"

function App() {
  return (
    <BrowserRouter>
    <Headers/>
    <Routes>
    <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
