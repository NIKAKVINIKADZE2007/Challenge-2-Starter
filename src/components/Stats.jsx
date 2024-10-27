import { stats } from '../constants';
const Stats = () => {
  return (
    <section className=''>
      <ul className='w-full flex items-center justify-between'>
        {stats.map((stat) => (
          <li
            key={stat.id}
            className='text-white items-center justify-between flex font-poppins text-[40.89px] h-[13px] pl-[50px] font-semibold border-l-dimWhite border-l-[0.5px] first:border-l-0 first:pl-0'
          >
            {stat.value}{' '}
            <span className='text-gradient text-start text-[20.45px] ml-[25px]'>
              {stat.title}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Stats;
