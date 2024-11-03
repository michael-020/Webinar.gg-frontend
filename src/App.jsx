import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { SideBar } from './components/SideBar'
import { HeroSection } from './components/HeroSection'

function App() {

  function changeTheme() {
    document.body.classList.toggle("dark");
  }

  return (
   <div className='overflow-hidden dark:bg-zinc-900'>
      <button className='absolute top-44 right-10 px-4 py-2 bg-blue-300 rounded-md' onClick={changeTheme}>Change theme</button>
      <div className='absolute w-[calc(100%-18.1rem)] left-[18.1rem] overflow-x-hidden'>
        <img src='https://img.pikbest.com/backgrounds/20190103/simple-blue-technology-line-banner-background_1851596.jpg!w700wp' className='w-screen h-32'/>
      </div>
      <div className='absolute left-[17.1rem] top-[8rem]'>
        <HeroSection />
      </div>
      <div className='hidden md:inline-block'>
        <SideBar logoImg={"week-13-assignment/public/Screenshot 2024-11-03 at 12.42.11 PM.png"} pfp={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL8p0YnDULTB1o2yg30WH1jjseq8dq1smyvA&s"} children={["Home", "Webinars", "Billing", "User Management", "Settings"]}/>
      </div>
   </div>
  )
}

export default App
