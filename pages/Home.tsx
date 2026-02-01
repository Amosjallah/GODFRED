
import React from 'react';
import Hero from '../components/Hero.tsx';
import About from '../components/About.tsx';
import Services from '../components/Services.tsx';
import Portfolio from '../components/Portfolio.tsx';
import Locations from '../components/Locations.tsx';
import Testimonials from '../components/Testimonials.tsx';
import Contact from '../components/Contact.tsx';

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
