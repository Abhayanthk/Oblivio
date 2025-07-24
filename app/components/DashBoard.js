"use client";

import InfiniteSlider from "./InfiniteSlider";
import Card from "./Card";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { format } from "date-fns";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const DashBoard = () => {
  const [greeting, setGreeting] = useState("");
  const [date, setDate] = useState("");
  const [showWelcome, setShowWelcome] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  const hour = new Date().getHours();
  useEffect(() => {
    if (hour < 12) {
      setGreeting("Good Morning");
    } else if (hour < 18) {
      setGreeting("Good Afternoon");
    } else {
      setGreeting("Good Evening");
    }
    const today = format(new Date(), "EEEE, MMMM do, yyyy"); // Monday, July 21st, 2025
    setDate(today);
  }, []);
  const handleClick = () => {
    setFadeOut(true);
    setTimeout(() => setShowWelcome(false), 500); // Match animation duration
  };
  const cards = [
    {
      image: "Vedios/01.mp4",
      header: "Amazon Rainforest",
      content:
        "Discover the wonders of the Amazon Rainforest, home to diverse wildlife and vibrant greenery.",
    },
    {
      image: "Vedios/02.mp4",
      header: "Grand Canyon",
      content:
        "Experience the breathtaking views of the Grand Canyon, one of the Seven Natural Wonders of the World.",
    },
    {
      image: "Vedios/03.mp4",
      header: "Maldives",
      content:
        "Relax on the pristine beaches of the Maldives, renowned for their crystal-clear waters and luxurious resorts.",
    },
    {
      image: "Vedios/04.mp4",
      header: "Maldives",
      content:
        "Relax on the pristine beaches of the Maldives, renowned for their crystal-clear waters and luxurious resorts.",
    },
    {
      image: "Vedios/05.mp4",
      header: "Maldives",
      content:
        "Relax on the pristine beaches of the Maldives, renowned for their crystal-clear waters and luxurious resorts.",
    },
    {
      image: "Vedios/06.mp4",
      header: "Maldives",
      content:
        "Relax on the pristine beaches of the Maldives, renowned for their crystal-clear waters and luxurious resorts.",
    },
    {
      image: "Vedios/07.mp4",
      header: "Maldives",
      content:
        "Relax on the pristine beaches of the Maldives, renowned for their crystal-clear waters and luxurious resorts.",
    },
    {
      image: "Vedios/08.mp4",
      header: "Maldives",
      content:
        "Relax on the pristine beaches of the Maldives, renowned for their crystal-clear waters and luxurious resorts.",
    },
    {
      image: "Vedios/09.mp4",
      header: "Maldives",
      content:
        "Relax on the pristine beaches of the Maldives, renowned for their crystal-clear waters and luxurious resorts.",
    },
    {
      image: "Vedios/10.mp4",
      header: "Maldives",
      content:
        "Relax on the pristine beaches of the Maldives, renowned for their crystal-clear waters and luxurious resorts.",
    },
  ];

  return (
    <div className="  flex-1 bg-[#000000] text-white   flex flex-col items-center justify-center gap-2 transition-all duration-700 ease-in-out ">
      {/* Background Img & Welcome Message*/}
      {showWelcome ? (
        <motion.div
          key="welcome"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          onClick={handleClick}
          className="relative w-full flex flex-col items-center justify-center h-[100vh] cursor-pointer"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#000000] z-10"></div>
          <div
            className="absolute inset-0 "
            style={{
              backgroundImage: `url("/content/topography.svg")`,
              backgroundColor: "#0a0a0a",
              filter: "brightness(3)",
            }}
          ></div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="relative text-center flex flex-col items-center justify-center font-[Poppins]"
          >
            {/* Welcome Message */}
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffffff] via-[#504e4e] to-[#ffffff] md:text-6xl sm:text-2xl font-extrabold  tracking-widest animate-background-shine drop-shadow-[0_0_30px_rgba(255,255,255,0.15)] text-center">
              Welcome, Specter.
            </h1>

            {/* Main Heading */}
            <h1 className="text-transparent p-3 bg-clip-text bg-gradient-to-r from-[#ffffff] via-[#504e4e] to-[#ffffff]  animate-background-shine drop-shadow-[0_0_30px_rgba(255,255,255,0.15)]  text-[50px] font-black tracking-[-0.04em]  leading-[0.6]">
              {greeting}
            </h1>
            <p className="text-transparent  bg-clip-text bg-gradient-to-r from-[#ffffff] via-[#504e4e] to-[#ffffff]  animate-background-shine text-[18px] drop-shadow-[0_0_30px_rgba(255,255,255,0.15)] tracking-wide uppercase">
              {date}
            </p>
          </motion.div>
          {/* Login/signup account  */}
          <div className="absolute top-10 right-15 z-30 ">
            <div className="flex  gap-3 ">
              <button
                className="
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
              "
              >
                Login
              </button>
              <button
                className="
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
              "
              >
                Signup
              </button>
            </div>
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full flex flex-col items-center justify-start h-screen"
        >
          {/* Dashboard Content */}
          <div className="flex flex-col w-92/100 mt-10 gap-10">
            <h1
              className="text-5xl md:text-6xl font-black tracking-tight 
                  text-white/90 text-gradient
             font-[Cinzel]"
            >
              Track Your Habits
            </h1>
            <Carousel
              opts={{
                align: "start",
              }}
              className="w-1/2"
            >
              <CarouselContent>
                {cards.map((card, index) => (
                  <CarouselItem
                    key={index}
                    className="sm:basis-1/3 lg:basis-1/4"
                  >
                    <div className="p-1">
                      <Card
                        key={index}
                        dataImage={card.image}
                        header={card.header}
                        content={card.content}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default DashBoard;
