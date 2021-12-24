import React from 'react';
import logoImages from '../assets/images/Logo.png';

export default function Logo() {
  return (
    <div className='brand-text-icon '>
      <div className='d-flex'>
        <img
          className='rounded-circle w-50'
          src={logoImages}
          href=''
          type='link'
          alt=''
        />
        <span className='ml-2 my-auto text-center text-white'>
          <strong className='h4'>AFF</strong> <br /> Utama
        </span>
      </div>
    </div>
  );
}
