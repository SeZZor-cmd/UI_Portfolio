"use client"
import React from "react";
import Image from "next/image";

export default function HeroSection() {
  return(
  <>
  <main className=" flex items-center justify-center overflow-hidden">
        <div className="space-x-8 max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start">
          <div className="w-full md:w-1/2 p-8 order-2 md:order-1 text-center md:text-left">
            <p className="text-[#21243D] font-bold leading-[50px] text-[44px]">
              Hi, I am John,
              <br />
              Creative Technologist 
            </p>
            <p className="mt-4 font-normal text-[16px] text-[#21243D]">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            </p>
            <button className="mt-10 bg-[#FF6464] text-white py-2 px-6 font-medium">
              Download Resume
            </button>
          </div>
          <div className="w-full md:w-1/2 p-8 flex justify-center md:justify-end order-1 md:order-2 md:mb-0 mb-8 relative ">
            <Image
              src="/image/Hero-Img.png"
              alt="Hero Image"
              width={270}
              height={270}
              className="rounded-full z-50 absolute drop-shadow-2xl "/>
            <Image
              src="/Background.svg" 
              alt="background circle"
              width={270}
              height={270} 
              className="z-[-1] "             
            />
          </div>
        </div>
      </main>
  </>
  )
}