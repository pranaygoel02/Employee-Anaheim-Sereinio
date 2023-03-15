import React from 'react'
import './Footer.css'
import {TbWorld} from 'react-icons/tb'
import {BsTelephoneFill} from 'react-icons/bs'

function Footer() {
  return (
    <>
    <section className='px-8 md:px-[12rem] py-[6rem] text-white bg-[#222222] flex flex-col md:flex-row font-barlow text-gray-100/70 font-light items-start justify-between gap-8 md:gap-[9rem]'>
        <div className='flex flex-col gap-4' style={{flexBasis:'33%'}}>
            <h2 className='text-white font-gilda text-3xl'>About Hotel</h2>
            <p>From the sparkling outdoor pool and free breakfast to flexible meeting space and a business center, our brand new Anaheim hotel is an ideal choice for Southern California vacations, business trips and weekend getaways.</p>
            <div className='bg-[#282828] flex items-center self-start justify-between gap-4 p-4 text-gray-500 my-2'>
                <p>English</p>
                <TbWorld/>
            </div>
        </div>
        <div className='flex flex-col gap-4 flex-1'>
            <h2 className='text-white font-gilda text-3xl w-min'>Explore</h2>
            <ul className='flex flex-col gap-1'>
                <li className='footer-link'><span>Home</span></li>
                <li className='footer-link'><span>About</span></li>
                <li className='footer-link'><span>Rooms & Suites</span></li>
                <li className='footer-link'><span>Amenities</span></li>
                <li className='footer-link'><span>Meetings</span></li>
                <li className='footer-link'><span>Things To Do</span></li>
                <li className='footer-link'><span>Packages</span></li>
                <li className='footer-link'><span>Contact</span></li>
            </ul>
        </div>
        <div className='flex flex-col items-start gap-4'>
            <h2 className='text-white font-gilda text-3xl'>Contact</h2>
            <p>Holiday Inn Express & Suites - Anaheim Resort Area,<br></br>1411 S Manchester Avenue, Anaheim, California 92802</p>
            <BsTelephoneFill flex={'flex-row-reverse'} font='text-white font-gilda'/>
            <p className='underline underline-offset-[0.4rem] decoration-primary text-white'>reservations@hieanaheim.com</p>
        </div>
    </section>
    <div className='w-full p-8 text-center bg-[#1e1e1e] text-sm font-barlow text-gray-400'>
        <p>&copy; Copyright {new Date().getFullYear()} by <a className='text-white'>Holiday Inn</a></p>
    </div>
    </>
  )
}

export default Footer