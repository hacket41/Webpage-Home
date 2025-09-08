import React from 'react';
import Header from '../components/header/Header';
import NavPill from '../components/nav-pill/NavPill';   
import Hero from '../components/hero/Hero';
import DealStrip from '../components/deals/DealStrip';
import CategoryGrid from '../components/categories/CategoryGrid';
import RestaurantStrip from '../components/restaurants/RestaurantStrip';
import BrandStrip from '../components/popular-restaurants/BrandStrip';
import ValueProp from '../components/value-prop/ValueProp';
import StatsStrip from '../components/stats/StatsStrip';
import SiteFooter from '../components/stats/SiteFooter';
import FooterCta from '../components/footer-cta/FooterCta';

const HomePage: React.FC = () => (
  <div className="min-h-screen bg-gray-50 pb-20 md:pb-0">
    <Header />
    <NavPill />
    <Hero />
    <DealStrip />
    <RestaurantStrip />
    <CategoryGrid />
    <BrandStrip />
    <ValueProp />
    <FooterCta />
    <StatsStrip />
    <SiteFooter />
  </div>
);
export default HomePage;
