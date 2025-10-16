import React from 'react'

function Hero() {
  return (
    <section className='hero-main relative z-1 xl:m-5'>
      <div className="hero-content-main bg-[url(/hero.jpg)] bg-cover xl:pt-[88px] w-full xl:rounded-2xl px-2 md:px-20 ">
        <div className="max-w-7xl xl:h-[100vh] h-[70vh] mx-auto text-[var(--text-light)] space-y-2 lg:space-y-4 text-center md:text-start flex flex-col justify-center items-center md:items-start">
          <h6 className='text-sm lg:text-lg'>Get unforgettable pleasure with us</h6>
          <h1 className='text-2xl md:text-4xl xl:text-7xl font-bold max-w-3xl'>Discover Your Next Handpicked Journey</h1>
          <p className='max-w-2xl text-xs lg:text-sm text-white/85'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora eum error minima ducimus vitae exercitationem sed adipisci saepe quas? Perspiciatis hic assumenda libero nesciunt quasi laudantium distinctio neque.</p>
        </div>
      </div>
    </section>
  )
}

export default Hero