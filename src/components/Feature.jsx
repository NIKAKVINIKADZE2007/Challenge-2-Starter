import { useState } from 'react';
import GetStartedBtn from '../buttons/GetStartedBtn';
import { features } from '../constants';

const Feature = () => {
  const [active, setActive] = useState(features[0].id);

  return (
    <div className='w-full flex justify-between items-center'>
      <div>
        <h1 className='text-5xl font-poppins tracking-[1px] leading-[160%] text-white font-semibold max-w-[622px] w-full'>
          You do the business, we’ll handle the money.
        </h1>
        <p className='max-w-[570px] font-poppins mt-[24px] mb-[48px] text-white opacity-70 tracking-[1.25px] text-[18px] leading-[170%]'>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <GetStartedBtn />
      </div>

      <div className='flex flex-col h-[344px] justify-between max-w-[470px] w-full font-poppins'>
        {features.map((feature) => (
          <div
            className={`flex h-[79px] w-full justify-between  items-center ${
              active === feature.id ? 'h-[115px] bg-black-gradient' : ''
            }`}
            key={feature.id}
          >
            <img
              src={feature.icon}
              alt='feature-icon'
              className='w-[64px] h-[64px]'
            />
            <div className='max-w-[366px] w-full h-[74px] '>
              <h1 className='text-white font-semibold font-poppins text-[18px]'>
                {feature.title}
              </h1>
              <p className='w-full mt-[8px]  text-white opacity-70 tracking-[1px] text-[18px] leading-[170%]'>
                {feature.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
