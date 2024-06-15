import React, { FC, useState } from 'react'
import Image from "next/image"
import MenuIcon from '../atoms/icons/Menu';
import XIcon from '../atoms/icons/X';

interface INavbar {
  categories: any;
}

const Navbar: FC<INavbar> = (props) => {

  const [isOpen, setOpen] = useState(false)

  const onClickMenu = (id: string) => {
    const targetElement = document.getElementById(id);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 100,
          behavior: 'smooth'
        });
      }
  }
  return (
    <div className='container mx-auto px-6 sticky top-6 z-50'>
      <div className='px-8 md:px-14 py-4 rounded-full flex flex-row justify-between items-center' style={{backgroundColor:"rgba(255, 255, 255, 0.8)"}}>
        <div className='relative w-5 h-5 md:w-7 md:h-7 z-50' >
          <Image src={`${process.env.NEXT_PUBLIC_ROOT}/assets/images/itcomnet-logo.webp`} fill alt="itcomnet"/>
        </div>
        <div className='font-clashgrotesk-md hidden lg:flex flex-row items-center gap-x-4'>
          <button className='custom-button px-4 py-2 rounded-md transition-all duration-300 hover:bg-gray-100' style={{color: "#344054"}} onClick={onClickMenu.bind(null, "home")}>Home</button>
          <button className='custom-button px-4 py-2 rounded-md transition-all duration-300 hover:bg-gray-100' style={{color: "#344054"}} onClick={onClickMenu.bind(null, "about-us")}>About Us</button>
          {
            props.categories.data.map((item: any) => (
              <button key={item.id} className='custom-button px-4 py-2 rounded-md transition-all duration-300 hover:bg-gray-100' style={{color: "#344054"}} onClick={onClickMenu.bind(null, item.attributes.slug)}>{item.attributes.title}</button>
            ))
          }
          <button className='custom-button px-4 py-2 rounded-md transition-all duration-300 hover:bg-gray-100' style={{color: "#344054"}} onClick={onClickMenu.bind(null, "contact-us")}>Contact Us</button>
        </div>
        <button className='lg:hidden z-50' onClick={setOpen.bind(null, !isOpen)}>{isOpen ? <XIcon/> : <MenuIcon/>}</button>
      </div>
      <div className='relative lg:hidden'>
          <div className={['fixed w-full h-[100vh] bg-white top-0 transition-all duration-300 z-40 pt-40', isOpen ? 'right-0' : '-right-full'].join(' ')}>
            <div className='font-clashgrotesk-md flex flex-col justify-center items-center gap-x-4 gap-12'>
              <button className='custom-button text-2xl' style={{color: "#344054"}} onClick={() => {
                onClickMenu("home")
                setOpen(!isOpen)
              }}>Home</button>
              <button className='custom-button text-2xl' style={{color: "#344054"}} onClick={() => {
                onClickMenu("about-us")
                setOpen(!isOpen)
              }}>About Us</button>
              {
                props.categories.data.map((item: any) => (
                  <button key={item.id} className='custom-button text-2xl' style={{color: "#344054"}} onClick={() => {
                    onClickMenu(item.attributes.slug)
                    setOpen(!isOpen)
                  }}>{item.attributes.title}</button>
                ))
              }
              <button className='custom-button text-2xl' style={{color: "#344054"}} onClick={() => {
                onClickMenu("contact-us")
                setOpen(!isOpen)
              }}>Contact Us</button>
            </div>
          </div>
        </div>
      <style jsx>
        {`
          .custom-button {
            cursor: pointer;
          }
          .custom-button:hover {
            color: #FFA500;
          }
        `}
      </style>
    </div>
  )
}

export default Navbar