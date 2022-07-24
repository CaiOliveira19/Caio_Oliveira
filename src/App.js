import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Service from './components/Service/Service';
import CV from './components/CV/CV';
import Footer from './components/Footer/Footer';
import Scrolltop from './components/Scrolltop/Scrolltop';
import { motion } from "framer-motion";

import './App.css';


function App() {
  return (
    <motion.div initial="hidden" animate="show">

      <Header />
      <Home />
      <About />
      <Service />
      <CV />
      <Portfolio />
      <Footer />
      <Scrolltop />

    </motion.div>
  );
}

export default App;
