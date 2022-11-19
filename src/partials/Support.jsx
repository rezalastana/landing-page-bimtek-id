import React from 'react';

import TestimonialImage from '../images/testimonial.jpg';
import TiketSeminar from'/support/logo.png';
import KantorLurah from'/support/Kantor-Lurah.png';
import BNSP from '/support/logo-bnsp.png';
// import GM from './support/gm-logo.png';

function Support() {
  return (
    <section className="relative">

      {/* Illustration behind content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -mb-32" aria-hidden="true">
        <svg width="1760" height="518" viewBox="0 0 1760 518" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-02">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          {/*<g transform="translate(0 -3)" fill="url(#illustration-02)" fillRule="evenodd">
          <circle cx="1630" cy="128" r="128" />
            <circle cx="178" cy="481" r="40" />
          </g>*/}
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 mb-4">Supported By</h2>
            <p className="text-xl text-gray-600" data-aos="zoom-y-out">BIMTEK_ID di support oleh</p>
          </div>

          {/* Items */}
          <div className="max-w-sm md:max-w-3xl mx-auto grid gap-10 md:gap-20 grid-cols-2 md:grid-cols-2">
            <img className="mx-auto my-auto" src={TiketSeminar} width="500" height="500" alt="Hero"/>
            <img className="mx-auto my-auto" src={KantorLurah} width="500" height="500" alt="Hero" />
          <div className="text-center pb-12 md:pb-16"></div>
          </div>


        </div>
      </div>
    </section>
  );
}

export default Support;