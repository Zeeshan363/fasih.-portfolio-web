import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Services from './components/Services';
import Client from './components/Client';
import Footer from './components/Footer';
import ContactUsForm from './components/ContactUsForm';
import Work from './components/Work';
import { Carousel } from 'react-responsive-carousel';
import Aboutt from './components/Aboutt';

function App() {
  return (
   <>
      <Navbar />
      <Aboutt />
      <Services />
      <Work />
      <div className='my-10'>
      <h1 className="text-lg font-bold text-glintGreen text-center md:text-xl md:pt-20 2xl:pt-32">CLIENT REVIEWS</h1>
      <p className='w-[90%] mx-auto text-center text-2xl font-bold my-5 md:text-3xl'>WHAT OUR CLIENTS SAY</p>
      <Client />
      </div>
      <ContactUsForm />
    <Footer />

    </>   
  );
}

export default App;

{/* <About /> */}