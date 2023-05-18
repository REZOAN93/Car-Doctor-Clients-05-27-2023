import React from 'react';
import About from './About';
import Address from './Address';
import Banner from './Banner';
import Product from './Product';
import Services from './Services';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Services></Services>
      <Address></Address>
      <Product></Product>
    </div>
  );
};

export default Home;