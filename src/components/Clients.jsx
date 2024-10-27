import React from 'react';
import { clients } from '../constants';

const Clients = () => {
  return (
    <ul className='flex justify-between items-center w-full'>
      {clients.map((client) => (
        <li key={client.id}>
          <img src={client.logo} alt={client.id} className='w-[192.5px]' />
        </li>
      ))}
    </ul>
  );
};

export default Clients;
