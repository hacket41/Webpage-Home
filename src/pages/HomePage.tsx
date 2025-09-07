import React from 'react';
import Header from '../components/header/Header';
import Hero from '../components/hero/Hero';
import SearchBar from '../components/search/SearchBar';
import RiderStatus from '../components/status/RiderStatus';
import DealStrip from '../components/deals/DealStrip';
import CategoryGrid from '../components/categories/CategoryGrid';
import RestaurantStrip from '../components/restaurants/RestaurantStrip';

const HomePage: React.FC = () => (
  <div className="min-h-screen bg-gray-50">
    <Header />
    <Hero />
    <SearchBar />
    <RiderStatus />
    <DealStrip />
    <CategoryGrid />
    <RestaurantStrip />
  </div>
);
export default HomePage;
