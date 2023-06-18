import React from 'react'
import imageQR from '../assets/images/image-qr-code.png'

const Home = () => {
  return (
    <section className='w-screen h-screen flex justify-center items-center bg-[#d6e0ed]'>
      <div className='w-full mx-4 md:w-80 p-4 pb-10 flex flex-col gap-6 justify-center items-center bg-white shadow-xl rounded-xl'>
        <img className='rounded-lg' src={imageQR} alt="image qr code" />
        <h1 className='px-3 font-bold text-center text-[22px]'>Improve your front-end skills by building projects</h1>
        <p className='px-3 text-gray-500 text-center font-medium'>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
      </div>
    </section>
  )
}

export default Home