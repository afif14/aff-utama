import React from 'react';
import voice from '../assets/images/voice.png';
import Fade from 'react-reveal/Fade';

export default function Testimoni() {
  return (
    <Fade right>
      <div className='testimoni'>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <img src={voice} alt='' />
            </div>
            <div className='col testimoni-text'>
              <h1>Where hanging out is easy</h1>
              <p>
                Grab a seat in a voice channel when you’re free. Friends in your
                server can see you’re around and instantly pop in to talk
                without having to call.
              </p>
              <button className='btn btn-testimoni rounded-full'>
                Try Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
