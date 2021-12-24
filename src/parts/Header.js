import React from 'react';
import Button from '../elements/Button';
import Logo from './Logo';

export default function Header(props) {
  return (
    <header className='spacing-sm'>
      <div className='container'>
        <nav className='navbar navbar-expand-lg navbar-light pt-4'>
          <Logo />

          <div className='collapse navbar-collapse'>
            <ul className='navbar-nav mx-auto '>
              <li className='mx-4'>
                <Button className='nav-link  text-white' type='link' href='/'>
                  Features
                </Button>
              </li>
              <li className='mx-4'>
                <Button className='nav-link  text-white' type='link' href='/'>
                  Workflow
                </Button>
              </li>
              <li className='mx-4 '>
                <Button className='nav-link  text-white' type='link' href='/'>
                  Pricing
                </Button>
              </li>
              <li className='mx-4  '>
                <Button className='nav-link text-white' type='link' href='/'>
                  Reasources
                </Button>
              </li>
            </ul>
          </div>
          <div className='right-cta-menu'>
            <Button className='btn btn-sign-up mr-4'>Sign Up</Button>
            <Button className='btn btn-primary btn-login rounded-full ml-4'>
              Login
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
