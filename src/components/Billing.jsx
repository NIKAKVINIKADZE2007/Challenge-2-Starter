import { bill, google } from '../assets';
import { apple } from '../assets';
const Billing = () => {
  return (
    <div className='flex justify-between w-full items-center font-poppins'>
      <img
        src={bill}
        className='h-[500px] max-w-[530px] w-full'
        alt='bill-photo'
      />
      <div className='max-w-[470px] w-full'>
        <h1 className='text-white text-5xl font-semibold'>
          Easily control your billing & invoicing.
        </h1>
        <p className='w-full text-white opacity-70 tracking-[1px] text-[18px] leading-[170%] text-left mt-[24px] mb-[48px]'>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
        <div className='flex justify-between items-center max-w-[305px]'>
          <button>
            <img src={apple} alt='apple-logo' />
          </button>
          <button>
            <img src={google} alt='google-logo' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Billing;
