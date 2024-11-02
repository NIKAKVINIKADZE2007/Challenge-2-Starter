import { useState } from 'react';
import { feedback } from '../constants';
import { quotes } from '../assets';

const FeedBack = () => {
  const [active, setActive] = useState(feedback[0].id);

  console.log(active);
  return (
    <section className='w-full h-[639px] flex flex-col font-poppins justify-between'>
      <div className='flex max-w-[1049px] w-full justify-between items-center'>
        <h2 className='text-5xl text-white font-semibold  max-w-[470px] w-full leading-[175%]'>
          What people are saying about us
        </h2>
        <p className='text-white opacity-70 max-w-[445px] w-full text-[18px] tracking-[1px]'>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div className='flex justify-between w-full h-[395px]'>
        {feedback.map((feed) => (
          <div
            className={`max-w-[370px] h-full flex-1 flex justify-center items-center cursor-pointer ${
              active === feed.id ? 'bg-black-gradient rounded-[20px]' : ''
            }`}
            key={feed.id}
            onClick={() => {
              setActive(feed.id);
            }}
          >
            <div className='max-w-[290px] h-[275px] w-full flex flex-col items-start justify-between'>
              <img className='w-[42[x] h-[24px]' src={quotes} alt='quotes' />
              <p className='text-[18px]   text-left leading-[180%] tracking-[1.5px] text-white'>
                {feed.content}
              </p>

              <div className='max-w-[222px] w-full h-[48px] flex justify-between'>
                <img
                  src={feed.img}
                  className='object-contain w-[48px]'
                  alt='profile-picture'
                />
                <div className=''>
                  <p className='text-white text-[20px]'>{feed.name}</p>
                  <p className='text-white opacity-50'>Founder & Leader</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeedBack;
