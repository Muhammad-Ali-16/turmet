import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../ui/Button'


function OverlayBar({ isOpen }) {

  const [isSublistOpen, setIsSublistOpen] = useState(false)

  return (
    <div className={`overlaybar-main xl:hidden block absolute w-[100%] top-14 md:top-18 px-2 bg-[var(--text-dark)] transition-all duration-300 ${isOpen ? 'max-h-[600px]' : 'max-h-0'}`}>
      {/* >------->-------->Overaly-Links<-------<--------< */}
      <ul className={`overlay-links flex flex-col space-y-2 ${isOpen ? 'visible' : 'invisible'} p-4`}>
        <li className='overlay-link'>
          <Link to='/'>
            Home
          </Link>
        </li>
        <li className={`overlay-link group cursor-pointer`} onClick={() => { setIsSublistOpen(!isSublistOpen) }}>
          Pages <i className={`ms-1 bi bi-chevron-down before:transition-all before:duration-150 ${isSublistOpen ? 'before:-rotate-180' : 'before:rotate-0'}`} />
          {/* >------->-------->Overaly-Sub-Links<-------<--------< */}
          <ul className={`sublist relative px-4 space-y-2 rounded-b-lg w-[140px] transition-all duration-150 ${isSublistOpen && isOpen ? 'visible opacity-100 max-h-[350px] py-4' : 'invisible opacity-0 max-h-0 py-0'}`}>
            <li className="sublist-link"><Link to='/about'> About Us </Link> </li>
            <li className="sublist-link"><Link to='/activities'> Activities </Link> </li>
            <li className="sublist-link"><Link to='/team'> Our Team </Link> </li>
            <li className="sublist-link"><Link to='/blog'> Our Blog </Link> </li>
            <li className="sublist-link"><Link to='/faq'> Faq </Link> </li>
            <li className="sublist-link"><Link to='/contact'> Contact Us </Link> </li>
          </ul>
        </li>
        <li className='overlay-link'>
          <Link to='/destination'>
            Destination
          </Link>
        </li>
        <li className='overlay-link'>
          <Link to='/tour'>
            Tour
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default function NavBar() {

  const [isOpen, setIsOpen] = useState(false)

  const nav_link = 'relative before:content-[] before:absolute before:w-[100%] before:h-[2.5px] before:bg-[var(--bg-secondary)] before:-bottom-1 before:transition-all before:duration-150 before:origin-left before:scale-x-0 hover:before:scale-x-100'

  return (
    <nav className='navbar-main absolute inset-0 w-[100%] z-10 h-[88px] xl:py-6 xl:px-8 py-4 px-2'>
      {/* >------->-------->NavBar-Main<-------<--------< */}
      <div className="navbar-content max-w-7xl relative mx-auto text-white flex flex-row justify-between items-center">
        <div className="logo">
          <Link to="/">
            <img src="/logo.svg" alt="logo" className='max-md:w-[150px]' />
          </Link>
        </div>
        {/* >------->-------->Nav-Links<-------<--------< */}
        <ul className="nav-links  hidden xl:flex flex-row space-x-10">
          <li className={nav_link}>
            <Link to='/'>
              Home
            </Link>
          </li>
          <li className={`${nav_link} group cursor-pointer`}>
            Pages <i className="ms-1 bi bi-chevron-down" />
            {/* >------->-------->NavBar-Sub-Links<-------<--------< */}
            <ul className="sublist top-8 absolute bg-white p-4 space-y-2 rounded-b-lg text-black w-[140px] max-h-0 transition-all duration-200  invisible opacity-0 group-hover:opacity-100 group-hover:visible group-hover:max-h-[300px] ">
              <li className="sublist-link hover:text-[var(--text-secondary)]"><Link to='/about'> About Us </Link> </li>
              <li className="sublist-link hover:text-[var(--text-secondary)]"><Link to='/activites'> Activities </Link> </li>
              <li className="sublist-link hover:text-[var(--text-secondary)]"><Link to='/team'> Our Team </Link> </li>
              <li className="sublist-link hover:text-[var(--text-secondary)]"><Link to='/blog'> Our Blog </Link> </li>
              <li className="sublist-link hover:text-[var(--text-secondary)]"><Link to='/faq'> Faq </Link> </li>
              <li className="sublist-link hover:text-[var(--text-secondary)]"><Link to='/contact'> Contact Us </Link> </li>
            </ul>
          </li>
          <li className={nav_link}>
            <Link to='/destination'>
              Destination
            </Link>
          </li>
          <li className={nav_link}>
            <Link to='/tour'>
              Tour
            </Link>
          </li>
        </ul>

        <div className="navbar-btn hidden xl:block">
          <Button text='Request A Quote' path='/' additionalClass='bg-white/25 before:bg-[var(--button-secondary)]' />
        </div>

        <button className="toogle-btn cursor-pointer inline-block xl:hidden text-3xl" onClick={() => { setIsOpen(!isOpen) }}>
          <i className={`bi bi-${isOpen ? 'x' : 'list'}`} />
        </button>

        <OverlayBar isOpen={isOpen} />

      </div>
    </nav>
  )
}