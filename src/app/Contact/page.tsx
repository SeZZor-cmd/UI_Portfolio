"use client"
import React from 'react'

export default function page() {
  return (
    <div className="max-w-5xl mx-auto p-6 bg-white">
    
    <div className="mb-8">
      <h1 className="font-bold text-[22px] text-[#21243D] mb-8 mt-4">Get In Touch</h1>
      <p className="text-[#21243D]">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
        Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
      </p>
    </div>

    
    <div className="mb-4">
      <label className="block text-[#21243D] font-medium mb-1">Name *</label>
      <div className="flex space-x-4">
        <div className="w-1/2">
          <input
            type="text"
            placeholder="First Name"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="w-1/2">
          <input
            type="text"
            placeholder="Last Name"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>
    </div>

    
    <div className="mb-4">
      <label className="block text-[#21243D] font-medium mb-1">Email *</label>
      <input
        type="email"
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
    </div>

    
    <div className="mb-4">
      <label className="block text-[#21243D] font-medium mb-1">Message *</label>
      <textarea
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 h-32 resize-none"
      ></textarea>
    </div>

    
    <button className="mt-10 bg-[#FF6464] text-white py-2 px-6 font-medium hover:bg-red-500">
      Submit
    </button>
  </div>
  )
}

