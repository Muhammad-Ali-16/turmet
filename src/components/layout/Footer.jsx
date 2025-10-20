import React from 'react'

function Footer() {
  return (
    <footer className='footer-main bg-[url(/footer-bg.jpg)] bg-cover bg-no-repeat px-3 pb-12'>
      <div className='footer-content-main grid grid-rows-1 grid-cols-1 md:grid-cols-2 xl:grid-cols-4 max-w-7xl mx-auto text-white gap-8 border-b border-dashed border-white/40 pb-2'>
        {/* >------->-------->Footer-Col-1<-------<--------< */}
        <div className="footer-col text-center text-white space-y-6 bg-[#242625] px-8 py-12 rounded-b-2xl">
          <a href="/">
            <img src="/logo.svg" alt="logo" className='my-6 mx-auto max-w-[180px]' />
          </a>
          <div>
            <h5 className='font-bold text-lg'>Subscribe Newsletter</h5>
            <h5 className='text-white/80 text-md'>Get Our Latest Deals and Update</h5>
          </div>
          <form className='space-y-5'>
            <div className="space-y-3">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email Address"
                autoComplete="email"
                required
                className="block w-full rounded-full px-3 py-3 bg-[var(--bg-primary)] placeholder:text-sm text-sm placeholder:text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--text-secondary)]"
              />
            </div>
            <button type='submit'
              className='bg-[var(--button-primary)] before:bg-[var(--button-secondary)] text-[var(--text-light)] cursor-pointer px-5 py-4 rounded-full w-full relative z-2 overflow-hidden 
            before:transition-all before:duration-350 before:content-[] before:absolute before:inset-0 before:w-[100%] before:h-[100%] before:rounded-full before:-z-1 before:scale-x-0 hover:before:scale-x-100 before:origin-left'
            >
              <a href='/' className='font-semibold text-sm lg:text-[16px]'>
                Subscribe
                <i className="ms-1 bi bi-arrow-right"></i>
              </a>
            </button>
          </form>
          <div className="footer-social-icons space-x-2">
            <button className='w-12 h-12 rounded-full bg-white hover:bg-[var(--bg-secondary)] hover:text-white text-[var(--text-secondary)] transition-all duration-300'> <a href="?" className=''><i className="bi bi-facebook"></i></a></button>
            <button className='w-12 h-12 rounded-full bg-white hover:bg-[var(--bg-secondary)] hover:text-white text-[var(--text-secondary)] transition-all duration-300'> <a href="?" className=''><i className="bi bi-instagram"></i></a></button>
            <button className='w-12 h-12 rounded-full bg-white hover:bg-[var(--bg-secondary)] hover:text-white text-[var(--text-secondary)] transition-all duration-300'> <a href="?" className=''><i className="bi bi-twitter-x"></i></a></button>
            <button className='w-12 h-12 rounded-full bg-white hover:bg-[var(--bg-secondary)] hover:text-white text-[var(--text-secondary)] transition-all duration-300'> <a href="?" className=''><i className="bi bi-linkedin"></i></a></button>
          </div>
        </div>
        {/* >------->-------->Footer-Col-2<-------<--------< */}
        <div className="footer-col">
          <h5 className='font-bold text-xl relative before:content-[] before:absolute before:w-[20%] before:h-[1.5px] before:-bottom-3 before:bg-[var(--text-secondary)] mb-8 mt-4 md:mt-8'>
            Quick Links
          </h5>
          <ul className='space-y-3.5'>
            <li className='hover:text-[var(--text-secondary)]'><a href="/">Home</a></li>
            <li className='hover:text-[var(--text-secondary)]'><a href="/">About Us</a></li>
            <li className='hover:text-[var(--text-secondary)]'><a href="/">Blog</a></li>
            <li className='hover:text-[var(--text-secondary)]'><a href="/">Services</a></li>
            <li className='hover:text-[var(--text-secondary)]'><a href="/">Tour</a></li>
          </ul>
        </div>
        {/* >------->-------->Footer-Col-3<-------<--------< */}
        <div className="footer-col">
          <h5 className='font-bold text-xl relative before:content-[] before:absolute before:w-[20%] before:h-[1.5px] before:-bottom-3 before:bg-[var(--text-secondary)] mb-8 mt-4 md:mt-8'>
            Services
          </h5>
          <ul className='space-y-3.5'>
            <li className='hover:text-[var(--text-secondary)]'><a href="/">Wanderlust Adventure</a></li>
            <li className='hover:text-[var(--text-secondary)]'><a href="/">Globe Trotters Travel</a></li>
            <li className='hover:text-[var(--text-secondary)]'><a href="/">Odyssey Travel Services</a></li>
            <li className='hover:text-[var(--text-secondary)]'><a href="/">Jet Set Journeys</a></li>
            <li className='hover:text-[var(--text-secondary)]'><a href="/">Dream Destinations Travel</a></li>
          </ul>
        </div>
        {/* >------->-------->Footer-Col-4<-------<--------< */}
        <div className="footer-col space-y-4">
          <h5 className='font-bold text-xl relative before:content-[] before:absolute before:w-[20%] before:h-[1.5px] before:-bottom-3 before:bg-[var(--text-secondary)] mb-8 mt-4 md:mt-8'>
            Contact Us
          </h5>
          <div className='flex flex-row items-center '>
            <i className="bg-[var(--text-secondary)] p-2 me-4 rounded-sm bi bi-geo-alt-fill"></i> <h5>9550 Bolsa Ave #126, <br /> United States</h5>
          </div>
          <div className='flex flex-row items-center'>
            <i class="bg-[var(--text-secondary)] p-2 me-4 rounded-sm bi bi-envelope-fill"></i> <h5>info@touron.com</h5>
          </div>
          <div className='flex flex-row items-center'>
            <i class="bg-[var(--text-secondary)] p-2 me-4 rounded-sm bi bi-telephone-fill"></i> <h5>+256 214 203 215 <br /> +1 098 765 4321</h5>
          </div>
        </div>
      </div>
      {/* >------->-------->Footer-Bottom<-------<--------< */}
      <div className="footer-bottom mx-auto max-w-7xl flex flex-col lg:flex-row justify-between items-center text-white py-5 space-y-4 lg:space-y-0 text-center">
        <h5>Copyright © <span className='text-[var(--text-secondary)]'> Turmet</span>, All Rights Reserved.</h5>
        <div className="tearms-and-conditions flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
          <h5>Terms of use</h5>
          <h5>Privacy Environmental Policy</h5>
        </div>

      </div>
    </footer>
  )
}

export default Footer