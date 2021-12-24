import React from 'react';
import Button from '../elements/Button';
import Fade from 'react-reveal/Fade';

export default function Hero() {
  return (
    <Fade top>
      <div className='hero-text text-center mt-5'>
        <p className='first-text'>#1 COMMUNICATION PLATFROM</p>
        <h1 className='text-white second-text'>Communication With Everyone</h1>
        <span className='third-text'>
          Find new friends around you. Connections are very important <br /> to
          support your development
        </span>
        <div className='mt-4'>
          <Button className='btn btn-transparant btn-mac mr-3'>
            Download for Mac
          </Button>
          <Button className='btn btn-primary btn-browser'>
            Open Kumpulo in <strong>Browser</strong>
          </Button>
        </div>
      </div>
    </Fade>
  );
}
