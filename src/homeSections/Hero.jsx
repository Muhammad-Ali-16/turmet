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

      <div className="best-place-section-main mx-2 xl:mx-0">
        <div className="content-main border text-[var(--text-dark)] border-black/35 rounded-2xl my-4 px-6 py-10">

          <h2 className="text-2xl lg:text-3xl font-bold my-8">Find The Best Place</h2>

          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4">

              <div className="space-y-3">
                <label htmlFor="looking-for" className="block text-md font-semibold text-[var(--text-dark)]">
                  Looking For
                </label>
                <input
                  type="text"
                  id="looking-for"
                  name="looking-for"
                  placeholder="Tour Name"
                  autoComplete="name"
                  className="block w-full rounded-md px-3 py-3 bg-[var(--bg-primary)] placeholder:text-sm text-sm placeholder:text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--text-secondary)]"
                />
              </div>

              <div className="space-y-3">
                <label htmlFor="price" className="block text-md font-semibold text-[var(--text-dark)]">Price</label>
                <div className="relative">
                  <select
                    id="price"
                    name="price"
                    autoComplete="off"
                    className="w-full appearance-none rounded-md bg-[var(--bg-primary)] py-3 pr-8 pl-3 text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--text-secondary)]"
                  >
                    <option>$1000</option>
                    <option>$1200</option>
                    <option>$1400</option>
                    <option>$1600</option>
                    <option>$2000</option>
                  </select>
                  <svg
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 size-5 text-gray-400"
                  >
                    <path d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" />
                  </svg>
                </div>
              </div>

              <div className="space-y-3">
                <label htmlFor="country" className="block text-md font-semibold text-[var(--text-dark)]">Country</label>
                <div className="relative">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="w-full appearance-none rounded-md bg-[var(--bg-primary)] py-3 pr-8 pl-3 text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--text-secondary)]"
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                    <option>Germany</option>
                    <option>Pakistan</option>
                  </select>
                  <svg
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 size-5 text-gray-400"
                  >
                    <path d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" />
                  </svg>
                </div>
              </div>

              <div className="space-y-3">
                <label htmlFor="departure" className="block text-md font-semibold text-[var(--text-dark)]">Departure Day</label>
                <input
                  type="date"
                  id="departure"
                  name="departure"
                  className="block w-full rounded-md px-3 py-3 bg-[var(--bg-primary)] text-sm text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--text-secondary)]"
                />
              </div>

              <div className="space-y-3">
                <label className="block text-md font-semibold text-[var(--text-dark)]">Click To Submit</label>
                <button
                  type="submit"
                  className="cursor-pointer w-full px-3 py-3 rounded-md text-[var(--text-light)] bg-[var(--button-secondary)] relative z-2 overflow-hidden 
                  before:transition-all before:duration-300 before:absolute before:inset-0 before:bg-[var(--button-primary)] before:-z-1 before:scale-x-0 hover:before:scale-x-100 before:origin-left"
                >
                  <span className="font-semibold text-sm lg:text-base flex items-center justify-center gap-1">
                    Submit <i className="bi bi-arrow-right"></i>
                  </span>
                </button>
              </div>

            </div>
          </form>
        </div>

      </div>
    </section>
  )
}

export default Hero