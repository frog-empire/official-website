import React from 'react';
import HeaderNav from './HeaderNav';
import Hero from './Hero';

const Header = () => {
  return (
    <>
      <div className="flex flex-col w-full bg-hero-bg bg-cover bg-center bg-no-repeat h-screen">
        <HeaderNav />
        <Hero />
      </div>
    </>
  );
};

export default Header;
