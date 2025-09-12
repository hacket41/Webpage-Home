import React from 'react';
import Header from '../components/header/Header';
import Hero from '../components/hero/Hero';
import DealStrip from '../components/deals/DealStrip';
import CategoryGrid from '../components/categories/CategoryGrid';
import RestaurantStrip from '../components/restaurants/RestaurantStrip';
import BrandStrip from '../components/popular-restaurants/BrandStrip';
import ValueProp from '../components/value-prop/ValueProp';
import StatsStrip from '../components/stats/StatsStrip';
import SiteFooter from '../components/stats/SiteFooter';
import FooterCta from '../components/footer-cta/FooterCta';
import AboutStrip from '../components/about/AboutStrip';

const HomePage: React.FC = () => (
  <div className="min-h-screen bg-gray-50 pb-20 md:pb-0">
    <Header />
    <Hero />
    <DealStrip />
    <RestaurantStrip />
    <CategoryGrid />
    <BrandStrip />
    <ValueProp />
    <FooterCta />
    <AboutStrip />
    <StatsStrip />
    <SiteFooter />
  </div>
);

export default HomePage;
