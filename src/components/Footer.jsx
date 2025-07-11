import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
          <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            { /* --------left-side-------*/ }
            <div>
             <img  className ='mb-5 w-40' src={assets.logo} alt="" />
             <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis sapiente repellendus maxime facilis quae? Fugiat cumque deleniti quos voluptatem accusamus quia hic delectus consectetur doloribus eaque. Natus officiis fugiat minima?</p>
            </div>
            {/*----------center-------*/}
            <div>
              <p className='text-xl font-medium mb-5'>COMPANY</p>
              <ul className='flex flex-col gap-2 text-gray-600 '>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>

              </ul>
            </div>
            {/*-------right-side---------*/}
            <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600 '>
            <li>+1-212-456-7890</li>
            <li>prescripto@gmail.com</li>
          </ul>
                      </div>
          </div>
          <div>
            {/*--------copyright---------*/}
            <div>
                <hr />
                <p className='py-5 text-sm text-center'>Copyright 2025@ Prescripto-All Right Reserved</p>
            </div>
          </div>
    </div>
  )
}

export default Footer