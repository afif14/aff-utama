import React from 'react';
import demo from '../assets/images/demo.png';
import Fade from 'react-reveal/Fade';

export default function Features() {
  return (
    <Fade left>
      <div className='demo'>
        <div className='container'>
          <div className='row'>
            <div className='col demo-text'>
              <h1>Convenient communication with friendly interface</h1>
              <p>
                We offer a very friendly interface for you to communicate with
                friends and along with this you will be closer to those who are
                far from you.
              </p>
              <button className='btn btn-primary btn-demo rounded-full'>
                Free Demo
              </button>
            </div>
            <div className='col features-text'>
              <img src={demo} alt='' />
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
