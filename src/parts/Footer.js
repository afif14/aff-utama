import React from 'react';
import kumpulo from '../assets/images/logo-kumpulo.png';
import textKumpulo from '../assets/images/Kumpulo.png';

export default function Footer() {
  return (
    <footer className='text-lg-start  text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-2'></section>

      <section className='mt-5'>
        <div className='container text-md-start mt-5'>
          <div className='row mt-5'>
            <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mt-3'>
              <div className=' mb-4'>
                <img
                  className='mr-3'
                  src={kumpulo}
                  width='34'
                  height='34'
                  alt=''
                />
                {''}
                <img src={textKumpulo} width='169' alt='' />
              </div>
              <p>
                Make it easy for you to manage your project team, entrust all
                project management to us.
              </p>
              <input
                className='footer-input'
                type='email'
                placeholder='Enter your email'
              />
            </div>

            <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6 className='mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Features
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Services
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  How it Work
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Live Demo
                </a>
              </p>
            </div>

            <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6 className=' mb-4'>Resources</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Documentation
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Blog
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Github
                </a>
              </p>
            </div>

            <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6 className='mb-4'>Legals</h6>
              <p>
                <a href='#!'>Privacy Policy</a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Copyright
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Disclaimer
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Terms
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
