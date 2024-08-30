'use client'
import React from 'react'

export default function RecentPost() {
  const posts =[
    {
      title:"Making a design system from scratch",
      date:"12 Feb 2020",
      category:"Design,Pattern",
      description:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      title:"Creating pixel perfect icons in Figma",
      date:"12 Feb 2020",
      category:"Figma Icon Design",
      description:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
  ]
  return (
    <div className='bg-[#EDF7FA] py-8 overflow-y-hidden'>
    <div className=" max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start bg-[#EDF7FA]">
    
      <div>
        <div className='flex justify-center md:justify-between items-center mb-8 '>
        <p className='font-normal text-[22px] text-[#21243D]'>Recent Posts</p>
        <a href="#" className='hidden md:block text-[#00A8CC] text-[16px] font-normal'>View All</a>
        </div>
        <div className=' flex items-center justify-center'>
          <div className='flex flex-col md:flex-row justify-center items-stretch space-y-4 md:space-y-0 md:space-x-4 mb-8 w-5/6 md:w-full'>
            {posts.map((post, index)=>(
              <div key={index} className='bg-white rounded-lg shadow-lg p-6 w-full md:w-1/2 mx-2 text-left flex flex-col text-[#21243D]'>
                <p className='fold-bold text-[26px]'>{post.title}</p>
                <p className='mt-5 mb-5 text-[18px]'>{post.date} <span className='ml-4'>|</span><span className='ml-4'>{post.category}</span></p>
                <p>{post.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    
    </div>
    </div>
  )
}

