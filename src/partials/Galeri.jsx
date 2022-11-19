import React from 'react';

function Galeri() {
  return (
    <section className="relative" id="featuresBlock">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-[#c41933] pointer-events-none" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6" data-aos="zoom-y-out">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 text-3xl font-bold mb-4 sm:text-4xl">Galeri BIMTEK_ID</h2>
            <p className="text-xl text-gray-600">Berbagai acara bimbingan teknis di Indonesia telah kami selenggarakan.</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-5 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">

            <div class="grid-card group">
              <div class="grid-img bg-[url('/grid/aset/1.jpg')]"></div>
            </div>
            <div class="grid-card group">
              <div class="grid-img bg-[url('/grid/aset/2.jpg')]"></div>
            </div>
            <div class="grid-card group">
              <div class="grid-img bg-[url('/grid/aset/3.jpg')]"></div>
            </div>
            <div class="grid-card group">
              <div class="grid-img bg-[url('/grid/aset/4.jpg')]"></div>
            </div>
            <div class="grid-card group">
              <div class="grid-img bg-[url('/grid/aset/5.jpg')]"></div>
            </div>
            <div class="grid-card group">
              <div class="grid-img bg-[url('/grid/aset/6.jpg')]"></div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Galeri;
