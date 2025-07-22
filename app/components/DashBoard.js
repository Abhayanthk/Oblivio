'use client'
import React, {useEffect, useState} from 'react'
import { format } from 'date-fns';
const DashBoard = () => {
      const [greeting, setGreeting] = useState('');
      const [date, setDate] = useState('');

      const hour = new Date().getHours();
      useEffect(() => {
            if (hour < 12) {
                  setGreeting('Good Morning');
            } else if (hour < 18) {
                  setGreeting('Good Afternoon');
            } else {
                  setGreeting('Good Evening');
            }
            const today = format(new Date(), 'EEEE, MMMM do, yyyy'); // Monday, July 21st, 2025
            setDate(today);
      }, []);
  return (
            <div className='  flex-1 bg-[#000000] text-white   flex flex-col items-center justify-center gap-2 transition-all duration-700 ease-in-out '> 
                  <div
                      
                  className='relative w-full flex flex-col items-center justify-center  h-[100vh]'>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#000000] z-10"></div>
                        <div className='absolute inset-0 '
                        style={{backgroundImage: `url("/content/topography.svg")`,backgroundColor: '#0a0a0a',filter: 'brightness(3)'}} ></div>
                        {/* Welcome Message */}
                        <div >
                              <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffffff] via-[#504e4e] to-[#ffffff] md:text-6xl sm:text-2xl font-extrabold mb-4 tracking-widest animate-background-shine drop-shadow-[0_0_30px_rgba(255,255,255,0.15)] text-center">
                                    Welcome, Specter.
                              </h1>
                        </div>
                  {/* Main Heading */}
                  <div className=" relative text-center  flex flex-col items-center justify-center font-[Poppins] ">
                        <h1 className="text-[50px] font-black tracking-[-0.04em] text-white/90  leading-[0.6] mb-2 ">
                        {greeting}
                        </h1>
                        <p className="text-[18px] text-neutral-100 tracking-wide uppercase">
                        {date}
                        </p>
                  </div>
                  {/* Login/signup account  */}
                  <div className="absolute top-14 right-15 z-30 ">
                        <div className="flex  gap-3 ">
                              <button className="
                                          w-full 
                                          text-white 
                                          text-sm 
                                          font-medium 
                                          py-3 
                                          px-6 
                                          rounded-xl 
                                          animate-background-shine 
                                          bg-[linear-gradient(110deg,#0a0a0a,45%,#111111,55%,#0a0a0a)] 
                                          hover:bg-[linear-gradient(110deg,#111111,45%,#1a1a1a,55%,#111111)] 
                                          hover-glow
                                          transition 
                                          duration-300 
                                          backdrop-blur-md 
                                          border border-white/10
                                          ">Login</button>
                              <button className="
                                          w-full 
                                          text-white 
                                          text-sm 
                                          font-medium 
                                          py-3 
                                          px-6 
                                          rounded-xl 
                                          animate-background-shine 
                                          bg-[linear-gradient(110deg,#0a0a0a,45%,#111111,55%,#0a0a0a)] 
                                          hover:bg-[linear-gradient(110deg,#111111,45%,#1a1a1a,55%,#111111)] 
                                          hover-glow
                                          transition 
                                          duration-300 
                                          backdrop-blur-md 
                                          border border-white/10
                                          ">Signup</button>
                              </div>
                  </div>
            </div>
             {/* Dashboard Content */}
             <div className='flex  w-90/100 mt-10 gap-10'>
                  {/* project Progress */}
                  <div className='basis-6/10  bg-[#1a1a1a] rounded-lg p-6 shadow-lg backdrop-blur-md border border-white/10 flex flex-col items-center justify-center'>
                        <div>Hello How are you</div>
                        <div>Hello How are you</div>
                        <div>Hello How are you</div>
                        <div>Hello How are you</div>
                        <div>Hello How are you</div>
                  </div>
                  {/* Tasks */}
                  <div className='basis-4/10 bg-[#1a1a1a] rounded-lg p-6 shadow-lg backdrop-blur-md border border-white/10 ml-4'>
                        <h2 className="text-lg font-semibold mb-4">Your Tasks</h2>
                  </div>
            </div>
      </div>
  )
}

export default DashBoard

