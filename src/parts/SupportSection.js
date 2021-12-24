import React from 'react';
import kaskus from '../assets/images/kaskus.png';
import discord from '../assets/images/discord.png';
import google from '../assets/images/google.png';
import Fade from 'react-reveal/Fade';

export default function SupportSection() {
  return (
    <Fade top>
      <div className='support-section mt-5'>
        <center className='d-relative'>
          <div className='image-chat'></div>
        </center>

        <div className=''>
          <p className='text-center'>Supported By</p>
          <center>
            <div className='image-support mx-auto mt-4'>
              <img src={kaskus} alt='' />
              <img src={discord} alt='' />
              <img src={google} alt='' />
            </div>
          </center>
        </div>
      </div>
    </Fade>
  );
}
