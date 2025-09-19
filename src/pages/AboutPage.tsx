import React from 'react';
import Navbar from '../components/header/Navbar';
import Hero from '../aboutcomponents/hero/Hero';
import History from '../aboutcomponents/history/History';
import Footer from '../components/stats/SiteFooter';
import LocationStrip from '../aboutcomponents/locationstrip/LocationStrip';
import TypeStrip from '../aboutcomponents/type/TypeStrip';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-0">
      <Navbar />
      <Hero />
      <History />
      <LocationStrip />
      <TypeStrip />
      <Footer />
    </div>
  );
};

export default AboutPage;
