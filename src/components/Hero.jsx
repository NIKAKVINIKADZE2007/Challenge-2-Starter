import { discount, robot } from '../assets';
import GetStarted from './GetStarted';

const Hero = () => {
  return (
    <section id='hero' className='flex flex-col py-6 md:py-16  md:flex-row'>
      {/* left side  */}
      <div className='flex flex-col items-start justify-center flex-1'>
        {/* discount section  */}
        <div className='flex flex-row py-[6px] bg-custom-gradient rounded-[10px] mb-3 px-[10px]'>
          <img src={discount} alt='discount' className='w-[27px] h-[27px]' />
          <p className='font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] ml-[13px]'>
            <span className='text-white'>20%</span> Discount For{' '}
            <span className='text-white'>1 month</span> Account
          </p>
        </div>
        {/* title  */}
        <div className='flex justify-between items-center w-full'>
          <h2 className='flex flex-1 flex-col font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]'>
            The Next <br className='hidden sm:block' />
            <span className='text-gradient'>Generation</span>
          </h2>

          <div className='hidden mr-0 ss:flex  md:mr-4 text-white'>
            <GetStarted />
          </div>
        </div>
        {/* h4 payment Method */}
        <h4 className='font-poppins font-semibold text-white ss:text-[72px] text-[52px] ss:leading-[100px] leading-[75px] '>
          Payment Method.
        </h4>

        {/* Description */}
        <p className='font-poppins font-semibold text-dimWhite text-[18px] max-w-[470px] mt-5 leading-[30px] opacity-70'>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>

      {/* right side  */}
      <div className='flex relative items-center justify-center flex-1'>
        <img src={robot} alt='robot' />
        <div className='absolute z-0 w-[40%] h-[35%] top-[0] pink__gradient' />
        <div className='absolute z-0 w-[80%] h-[80%] rounded-full white__gradient' />
        <div className='absolute z-0 w-[50%] h-[50%] right-20 bottom-20  blue__gradient' />
      </div>
    </section>
  );
};

export default Hero;
