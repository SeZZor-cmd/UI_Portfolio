"use client"
import React from 'react'

export default function page() {
  const blogs =[
    {
      title:"UI Interactions of the week",
      date:"12 Feb 2019",
      category:"Express, Handlebars",
      description:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    },
    {
      title:"UI Interactions of the week",
      date:"12 Feb 2019",
      category:"Express, Handlebars",
      description:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    },
    {
      title:"UI Interactions of the week",
      date:"12 Feb 2019",
      category:"Express, Handlebars",
      description:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    },
    {
      title:"UI Interactions of the week",
      date:"12 Feb 2019",
      category:"Express, Handlebars",
      description:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    },
  ]
  return (
    <section className='max-w-5xl mx-auto flex flex-col'>
      <div className='font-bold text-[22px] text-[#21243D] mb-8 mt-4'>
        <h1>Blog</h1>
      </div>
      <div>
        {blogs.map((blog,index)=>(
          <div key={index}>
          <p className='font-bold text-[30px]'>{blog.title}</p>
          <span className='bg-[#142850] text-white rounded-full px-2 py-0.5 text-[18px] mt-4'>{blog.date} </span>
          <span className='text-[#8695A4] font-normal text-[20px] ml-5'>{blog.category}</span>
          <p className='text-[#21243D] font-normal text-[16px] mt-5'>{blog.description}</p>
          <hr className="h-px my-8 bg-[#E0E0E0] border-0 dark:bg-[#E0E0E0]"/>
        </div>
        ))}
      </div>
    </section>
  )
}

