import React from "react";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { SideBar } from './components/SideBar'
import { HeroSection } from './components/HeroSection'


function App() {
  const [dark, setDark] = React.useState(false);

  function changeTheme() {
    setDark(!dark);
    document.body.classList.toggle("dark");
  }

  return (
   <div className='overflow-x-hidden xl:overflow-hidden sticky dark:bg-zinc-900'>
      
      <div className='absolute w-screen left-0 overflow-x-hidden '>
        <img src='https://img.pikbest.com/backgrounds/20190103/simple-blue-technology-line-banner-background_1851596.jpg!w700wp' className='w-screen h-32'/>
      </div>
      <div className='translate-x-[18.2rem] translate-y-32 h-[52rem] lg:h-[52rem] bg-gray-100  dark:bg-zinc-800  relative left-[-18.2rem] lg:left-0'>
        <button className='absolute -top-24 right-80  px-3 py-3 bg-blue-300 rounded-md z-10' onClick={changeTheme}>
          {              
              !dark && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                    </svg>
          }
          {
              dark && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                      </svg>
          }
          </button>
        <HeroSection />
      </div>
      <div className='hidden lg:block overflow-hidden absolute top-0 h-screen bg-zinc-950'>
        <SideBar logoImg={"week-13-assignment/public/Screenshot 2024-11-03 at 12.42.11 PM.png"} pfp={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL8p0YnDULTB1o2yg30WH1jjseq8dq1smyvA&s"} children={["Home", "Webinars", "Billing", "User Management", "Settings"]}/>
      </div>
   </div>
  )
}

export default App
