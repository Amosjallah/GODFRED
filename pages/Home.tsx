
import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Locations from '../components/Locations';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

const Home: React.FC = () => {
  return (
    <div className="page-enter">
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Locations />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Home;
