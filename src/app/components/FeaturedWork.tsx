'use client'
import React from 'react'
import Image from 'next/image'

export default function FeaturedWork() {
  const works = [
    {
      src:"/image/Dashboard.png",
      title:"Designing Dashboards",
      year: "2020",
      category: "Dashboard",
      description : "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      src:"/image/Vibrant.png",
      title:"Vibrant Portraits of 2020",
      year: "2018",
      category: "Illustration",
      description : "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      src:"/image/Malyalam.png",
      title:"36 Days of Malayalam type",
      year: "2018",
      category: "Typography",
      description : "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
  ]
  return (
    <section className='max-w-5xl mx-auto flex flex-col overflow-y-hidden'>
      <div className='font-normal text-[22px] text-[#21243D] mb-8 mt-4 text-center md:text-left'>
        <p >Featured Work</p>
      </div>
      <div>
        {works.map((work,index)=>(
          <React.Fragment key={index}>
          <div className='flex flex-col md:flex-row space-x-4 mb-10 items-start gap-4'>
            <Image
            src={work.src}
            width={800}
            height={800}
            alt={work.title}
            className='rounded-md w-full md:w-1/2'/>
          <div className='ml-7'>
            <p className='font-bold text-[30px]'>{work.title}</p>
            <span className='bg-[#142850] text-white rounded-full px-2 py-0.5 text-[18px] mt-4'>{work.year} </span>
            <span className='text-[#8695A4] font-normal text-[20px] ml-5'>{work.category}</span>
            <p className='text-[#21243D] font-normal text-[16px] mt-5'>{work.description}</p>
            
          </div>
          
          </div>
          <hr className="h-px my-8 bg-[#E0E0E0] border-0 dark:bg-[#E0E0E0]"/>
          </React.Fragment>
        ))}
        
      </div>
    </section>
  )
}

