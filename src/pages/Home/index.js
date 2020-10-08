import React, { useState } from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import Hero from '../../components/sections/Hero';
import Info from '../../components/sections/Info';
import Newsletter from '../../components/sections/Newsletter';
import Services from '../../components/sections/Services';
import Sidebar from '../../components/Sidebar';
import {
  homeSection1,
  homeSection2,
  homeSection3,
  homeSection4,
  homeSection5,
} from '../../services/data';

function Home() {
  const [isOpen, setIsOpen] = useState('');

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Hero />
      <Info {...homeSection1} />
      <Info {...homeSection2} />
      {/* <Services /> */}
      <Info {...homeSection3} />
      <Info {...homeSection4} />
      <Newsletter {...homeSection5} />
      <Footer />
    </>
  );
}

export default Home;
