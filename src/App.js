

import About from './components/About';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Services from './components/Services';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <ToastContainer/>
      <Header/>
      <About/>
      <Services/>
      <Clients/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
