import React, { Component } from 'react';
import Header from '../parts/Header';
import Background from '../assets/images/background.png';
import wrapper from '../assets/images/wrapper.png';
import Hero from '../parts/Hero';
import SupportSection from '../parts/SupportSection';
import Features from '../parts/Features';
import Demo from '../parts/Demo';
import Footer from '../parts/Footer';
import Testimoni from '../parts/Testimoni';
import Join from '../parts/Join';

export default class LandingPage extends Component {
  render() {
    return (
      <div
        className='mt-3 '
        style={{
          backgroundImage: `url(${Background})`,
          backgroundSize: 'cover',
          height: '786px',
        }}>
        <div
          className='mt-3'
          style={{
            backgroundImage: `url(${wrapper})`,
            backgroundSize: '100%',
          }}>
          <Header {...this.props} />
          <Hero />
          <SupportSection />
          <Features />
          <Demo />
          <Testimoni />
          <Join />
          <Footer />
        </div>
      </div>
    );
  }
}
