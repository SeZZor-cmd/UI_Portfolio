"use client"
import React from 'react'
import Image from 'next/image'

export default function page() {
  return (
    <div className='max-w-5xl mx-auto flex flex-col'>
    <div className='text-[36px] font-bold text-[#21243D]'>
      <p>Designing Dashboards with usability in mind</p>
    </div>
    <div className='flex gap-2'>
      <p className='bg-[#FF7C7C] text-white rounded-full px-2 py-0.5 text-[18px] mt-4'>2020</p>
      <p className='text-[20px] font-normal mt-4 text-[#21243D]'>Dashboard, User Experience Design</p>
    </div>
    <div className='text-[16px] font-normal mt-4'>
      <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
    </div>
    <div>
    <Image
              src="/image/detail1.png"
              alt="Hero Image"
              height={1000}
              width={1000}
              className=" drop-shadow-2xl mt-4 "/>
    </div>
    <div className='font-medium text-[30px] mt-4'>
      <p>Heading 1</p>
    </div>
    <div className='font-medium text-[24px] mt-4'>
      <p>Heading 2</p>
    </div>
    <div className='font-normal text-[16px] mt-4'>
      <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
    </div>
    <div>
    <Image
              src="/image/detail2.png"
              alt="Hero Image"
              width={1000}
              height={1000}
              className=" drop-shadow-2xl mt-4 "/>
    </div>
    </div>
  )
}

