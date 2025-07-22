'use client'
import React, { useState } from 'react'
import { Home, Calendar, Target, Flame } from 'lucide-react';
const SideBar = () => {
      const [visible, setVisible] = useState(false);
      const navItems = [
            {name: 'Home', icon: Home},
            {name: 'Calendar', icon: Calendar}
      ]
  return (
      <div
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className={
      `transition-all duration-300 ease-in-
      z-[9999]
      fixed
      h-screen 
      bg-gradient-to-b from-black via-[#0a0a0a] to-[#111111]
      text-amber-100 
      shadow-[inset_0_0_20px_rgba(255,255,255,0.05)]
      border-r border-[#1f1f1f]/60 
      backdrop-blur-md
      flex flex-col items-center justify-start pt-10

      ${visible ? 'w-22' : 'w-0 overflow-hidden'}
      `}>
      <div className={` transition-all duration-300 ease-in-out flex flex-col items-center justify-center w-3/4 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
            {navItems.map(({name: Name, icon: Icon},index) =>{

                  return <div key = {index} className={`group flex items-center justify-center gap-2 py-3 mt-5
                  bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] 
                  text-gray-200 font-semibold
                  ring-1 ring-white/10
                  rounded-lg cursor-pointer 
                  shadow-[inset_0_0_10px_#00000050,0_0_10px_#00000040]
                  hover:ring-1 hover:ring-white
                  transition-all duration-300 ease-in-out
                  p-3 ${visible ? 'opacity-100' : 'opacity-0'}
                  `}>
                   <Icon className={`transition-all duration-300 ease-in-out w-6 h-6 text-white/50 group-hover:text-white  ${visible ? 'opacity-100' : 'opacity-0'}`} />
            </div>
                  })}
      </div>
      
    </div>
  )
}

export default SideBar
