'use client'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedin, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function FooterSection() {
  return (
    <section className='flex flex-col items-center justify-center mt-10 h-[182px]'>
      <div className='flex space-x-6 mb-4 text-[30px]'>
        <FontAwesomeIcon icon={faFacebookF}/>
        <FontAwesomeIcon icon={faInstagram}/>
        <FontAwesomeIcon icon={faTwitter}/>
        <FontAwesomeIcon icon={faLinkedin}/>
      </div>
      <div>
        <p className='font-normal'>Copyright &#169; All rights reserved</p>
      </div>
    </section>
  )
}

