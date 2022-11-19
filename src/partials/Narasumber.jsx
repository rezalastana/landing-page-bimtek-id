import React from 'react';

import TestimonialImage from '../images/testimonial.jpg';

function Narasumber() {
  return (
    <section className="relative" id="testimonial" >

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
          
          <div className="max-w-3xl mx-auto text-center mt-8">
            <h2 className="h2 h2 text-5xl font-bold mb-2">Narasumber</h2>
            <hr className="mx-40 border-1 border-black" />
            <p className="text-xl text-gray-600" data-aos="zoom-y-out">Diisi oleh narasumber yang berkompeten</p>
          </div>
    {/* Section Title */}
      <section className="border-b">
        <div className="container mx-auto flex flex-wrap">
          <div className="w-full md:w-1/4 sm:w-1/2 p-2 flex flex-col flex-grow flex-shrink">
            <div className="max-w-3xl mx-auto mt-20" data-aos="zoom-y-out">
              <div className="relative flex items-start border-2 border-gray-200 rounded bg-white">
                {/* Testimonial */}
                <div className="text-center px-12 py-8 pt-20 mx-4 md:mx-0">
                  <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
                    <img className="relative rounded-full" src={TestimonialImage} width="96" height="96" alt="Testimonial 01" />
                  </div>
                  <blockquote className="text-xl font-medium mb-4">
                    “ I love this product and would recommend it to anyone. “
                  </blockquote>
                  <cite className="block font-bold text-lg not-italic mb-1">Darya Finger</cite>
                  <div className="text-gray-600">
                    <span>CEO & Co-Founder</span> <a className="text-blue-600 hover:underline" href="#0">@Dropbox</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/4 sm:w-1/2 p-2 flex flex-col flex-grow flex-shrink">
            <div className="max-w-3xl mx-auto mt-20" data-aos="zoom-y-out">
              <div className="relative flex items-start border-2 border-gray-200 rounded bg-white">
                {/* Testimonial */}
                <div className="text-center px-12 py-8 pt-20 mx-4 md:mx-0">
                  <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
                    <img className="relative rounded-full" src={TestimonialImage} width="96" height="96" alt="Testimonial 01" />
                  </div>
                  <blockquote className="text-xl font-medium mb-4">
                    “ I love this product and would recommend it to anyone. “
                  </blockquote>
                  <cite className="block font-bold text-lg not-italic mb-1">Darya Finger</cite>
                  <div className="text-gray-600">
                    <span>CEO & Co-Founder</span> <a className="text-blue-600 hover:underline" href="#0">@Dropbox</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/4 sm:w-1/2 p-2 flex flex-col flex-grow flex-shrink">
            <div className="max-w-3xl mx-auto mt-20" data-aos="zoom-y-out">
              <div className="relative flex items-start border-2 border-gray-200 rounded bg-white">
                {/* Testimonial */}
                <div className="text-center px-12 py-8 pt-20 mx-4 md:mx-0">
                  <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
                    <img className="relative rounded-full" src={TestimonialImage} width="96" height="96" alt="Testimonial 01" />
                  </div>
                  <blockquote className="text-xl font-medium mb-4">
                    “ I love this product and would recommend it to anyone. “
                  </blockquote>
                  <cite className="block font-bold text-lg not-italic mb-1">Darya Finger</cite>
                  <div className="text-gray-600">
                    <span>CEO & Co-Founder</span> <a className="text-blue-600 hover:underline" href="#0">@Dropbox</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/4 sm:w-1/2 p-2 flex flex-col flex-grow flex-shrink">
            <div className="max-w-3xl mx-auto mt-20" data-aos="zoom-y-out">
              <div className="relative flex items-start border-2 border-gray-200 rounded bg-white">
                {/* Testimonial */}
                <div className="text-center px-12 py-8 pt-20 mx-4 md:mx-0">
                  <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
                    <img className="relative rounded-full" src={TestimonialImage} width="96" height="96" alt="Testimonial 01" />
                  </div>
                  <blockquote className="text-xl font-medium mb-4">
                    “ I love this product and would recommend it to anyone. “
                  </blockquote>
                  <cite className="block font-bold text-lg not-italic mb-1">Darya Finger</cite>
                  <div className="text-gray-600">
                    <span>CEO & Co-Founder</span> <a className="text-blue-600 hover:underline" href="#0">@Dropbox</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>


        </div>
      </div>
    </section>
  );
}

export default Narasumber;