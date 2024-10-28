import { card } from '../assets';
import GetStartedBtn from '../buttons/GetStartedBtn';

const CardDeal = () => {
  return (
    <section className='w-full flex justify-between'>
      <div className='flex justify-between flex-col max-w-[570px] w-full font-poppins text-left pt-[20px] pb-[77px]'>
        <h2 className='text-white text-5xl font-semibold tracking-[1px] leading-[160%] '>
          Find a better card deal in few easy steps.
        </h2>
        <p className='max-w-[465px] w-full text-white opacity-70 tracking-[1px] text-[18px] leading-[170%] text-left'>
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <GetStartedBtn />
      </div>
      <img src={card} className='max-w-[513px] w-full h-[449px]' alt='card' />
    </section>
  );
};

export default CardDeal;
