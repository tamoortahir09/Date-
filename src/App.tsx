import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import ProductHighlight from './components/ProductHighlight/ProductHighlight';
import Benefits from './components/Benefits/Benefits';
import VarietiesGrid from './components/VarietiesGrid/VarietiesGrid';
import Testimonials from './components/Testimonials/Testimonials';
import CTA from './components/CTA/CTA';
import Footer from './components/Footer/Footer';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProductHighlight />
        <Benefits />
        <VarietiesGrid />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
};

export default App;
