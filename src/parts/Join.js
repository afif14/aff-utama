import React from 'react';
import join from '../assets/images/join.png';
import Fade from 'react-reveal/Fade';

export default function Join() {
  return (
    <Fade>
      <div className='join'>
        <center>
          <img
            src={join}
            alt=''
            style={{
              backgroundSize: 'cover',
              width: '1013px',
            }}
          />
        </center>
      </div>
    </Fade>
  );
}
