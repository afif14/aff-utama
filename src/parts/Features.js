import React from 'react';
import channel from '../assets/images/chat-channel.png';
import Fade from 'react-reveal/Fade';

export default function Features() {
  return (
    <Fade right>
      <div className='features'>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <img src={channel} alt='' />
            </div>
            <div className='col features-text'>
              <h1>
                Create an invite-only <br /> place where your belong
              </h1>
              <p>
                Kumpulo servers are organized into topic-based channels where
                you can collaborate, share, and just talk about your day without
                clogging up a group chat.
              </p>
              <button className='btn btn-features rounded-full'>
                Explore Features
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
