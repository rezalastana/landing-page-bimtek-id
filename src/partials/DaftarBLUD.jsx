import React from 'react';

import TestimonialImage from '../images/testimonial.jpg';

function DaftarBLUD() {
  return (
    <section className="relative" id="daftarBLUD">

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
          <g transform="translate(0 -3)" fill="url(#illustration-02)" fillRule="evenodd">
            <circle cx="1630" cy="128" r="128" />
            <circle cx="178" cy="481" r="40" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 mt-8 md:pb-16" data-aos="zoom-y-out">
            <h2 className="h2 mb-4">BIMTEK BLUD</h2>
            <p>Daftar acara Bimbingan Teknis Badan Layanan Usaha Daerah</p>
          </div>

          {/* Testimonials */}
          <div className="max-w-xl mx-auto" data-aos="zoom-y-out">
            <div className="relative flex items-start border-2 border-gray-200 rounded bg-white">
              {/* Testimonial */}
              <div className="mx-auto text-center">
                <img className="relative mt-4" src="/poster/BLUD2022.jpg" alt="" width="300" height="500" />
                <blockquote className="text-2xl font-medium mb-4 mt-4">
                  “BLUD“
                </blockquote>
                <cite className="block text-lg text-gray-600 not-italic mb-1 mr-2 ml-2"></cite>
                <a href='https://tiketseminar.com/blud2022' class="my-5 mx-auto block rounded-full bg-[#c41933] px-6 py-3 font-semibold text-white hover:bg-[#df9494]">Daftar Sekarang</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default DaftarBLUD;
