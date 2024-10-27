import React from 'react';

const GetStartedBanner = () => {
  return (
    <section className='w-full h-[293px] bg-black-gradient-2 flex justify-center items-center rounded-[20px]'>
      <div className='max-w-[973px] w-full h-[149px] flex justify-between items-center'>
        <div className='h-full flex justify-between flex-col'>
          <h2 className='text-white text-5xl font-poppins font-semibold'>
            Let’s try our service now!
          </h2>
          <p className='max-w-[445px] tracking-[1px] w-full text-[18px] opacity-70 font-poppins text-white  leading-[160%] text-start'>
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
        <button className='text-[18px] font-medium text-[#00040E] rounded-[10px] max-w-[170px] w-full h-[64px] bg-blue-gradient'>
          Get Started
        </button>
      </div>
    </section>
  );
};

export default GetStartedBanner;
