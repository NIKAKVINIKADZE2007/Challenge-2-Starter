import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Clients from './components/Clients';
import GetStartedBanner from './components/GetStartedBanner';
import Footer from './components/Footer';
import FeedBack from './components/FeedBack';

const App = () => {
  return (
    <div className='w-full overflow-hidden bg-primary '>
      <div className='flex items-center justify-center px-6 sm:px-16'>
        <div className='max-w-[1280px] w-full'>
          <Navbar />
        </div>
      </div>

      <div className='flex items-center justify-center bg-primary px-6 sm:px-16'>
        <div className='max-w-[1280px] w-full'>
          <Hero />
        </div>
      </div>

      <div className='flex items-center justify-center px-6 sm:px-16'>
        <div className='max-w-[1280px] w-full'>
          <Stats />
        </div>
      </div>

      <div className='flex items-center justify-center px-6 my-[100px] sm:px-16'>
        <div className='max-w-[1280px] w-full'>
          <FeedBack />
        </div>
      </div>

      <div className='flex items-center justify-center px-6 my-[100px] sm:px-16'>
        <div className='max-w-[1280px] w-full'>
          <Clients />
        </div>
      </div>

      <div className='flex items-center justify-center px-6 my-[100px] sm:px-16'>
        <div className='max-w-[1280px] w-full'>
          <GetStartedBanner />
        </div>
      </div>

      <div className='flex items-center justify-center px-6 bg-primary sm:px-16'>
        <div className='max-w-[1280px] w-full'>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
