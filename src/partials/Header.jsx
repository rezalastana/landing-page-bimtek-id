import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import HeroImage from '../images/hero-image-1.png';

function Header() {

  const [top, setTop] = useState(true);

  // detect whether user has scrolled the page down by 10px 
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true)
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);  

    // let Links =[
    //   {name:"HOME",link:"/"},
    //   {name:"SERVICE",link:"/"},
    //   {name:"ABOUT",link:"/"},
    //   {name:"BLOG'S",link:"/"},
    //   {name:"CONTACT",link:"/"},
    // ];
    
    let [open,setOpen]=useState(false);

  return (
  <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top && 'bg-white backdrop-blur-sm  shadow-sm'}`}>
    <div className="max-w-6xl mx-auto px-5 sm:px-6">
      <div className="flex items-center justify-between h-16 md:h-20">
        {/* Site branding */}
          <div className="flex-shrink-0 mr-4">
            {/* Logo */}
            <a href="#home" className="block">
              <img className="relative rounded-full" src={HeroImage} width="85" height="85" alt="BIMTEKID"/>
            </a>
          </div>
        
        <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
        <ion-icon name={open ? 'close':'menu'}></ion-icon>
        </div>

        <ul className={`md:flex md:items-center md:pb-0 pb-10 absolute md:static bg-white md:bg-transparent md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-300 ease-in-out ${open ? 'top-[55px] ':'top-[-500px]'}`}>
          {/* {
            Links.map((link)=>(
              <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
                <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a>
              </li>
            ))
          } */}
          <li>
            <a href="#daftarBLUD" className="btn-sm md:mt-0 mt-4 text-gray-200 bg-[#c41933] hover:bg-[#7c241c] ml-3">
              <span>Daftar BLUD</span>
              <svg className="w-3 h-3 fill-current text-white flex-shrink-0 ml-2 -mr-1" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
              </svg>
            </a>
          </li>
          <li>
            <a href="#daftarBUMD" className="btn-sm md:mt-0 mt-4 text-gray-200 bg-[#c41933] hover:bg-[#7c241c] ml-3">
              <span>Daftar BUMD</span>
              <svg className="w-3 h-3 fill-current text-white flex-shrink-0 ml-2 -mr-1" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
              </svg>
            </a>
          </li>
          {/* <Button>
            Get Started
          </Button> */}
        </ul>
      </div>
    </div>
  </header>
  )
}

export default Header;
