import gsap from 'gsap'
import React, { useEffect } from 'react'
import { useRef } from 'react'
import { FaAsterisk } from 'react-icons/fa'

const MovingBanner = () => {
    const animMoving = useRef()
     useEffect(()=>{
        const ctx= gsap.context(()=>{
      gsap.to(animMoving.current,{
        xPercent: -50,
         duration: 25,
         ease: "linear",
         repeat: -1,
        })
        },animMoving) 
         return ()=> ctx.revert();
     } 
      
     ,[])
  return (
    <div ref={animMoving} className='flex flex-row justify-center items-center bg-green-500 flex-nowrap font-mono text-3xl py-4 gap-10 w-max overflow-hidden' >
      <h1 className='flex gap-5 justify-center items-center whitespace-nowrap' >LET'S WORK TOGETHER! <FaAsterisk/></h1>
      <h1 className='flex gap-5 justify-center items-center whitespace-nowrap' >LET'S WORK TOGETHER! <FaAsterisk/></h1>
      <h1 className='flex gap-5 justify-center items-center whitespace-nowrap ' >LET'S WORK TOGETHER! <FaAsterisk/></h1>
      <h1 className='flex gap-5 justify-center items-center whitespace-nowrap ' >LET'S WORK TOGETHER! <FaAsterisk/></h1>
      <h1 className='flex gap-5 justify-center items-center whitespace-nowrap' >LET'S WORK TOGETHER! <FaAsterisk/></h1>
      <h1 className='flex gap-5 justify-center items-center whitespace-nowrap' >LET'S WORK TOGETHER! <FaAsterisk/></h1>
      <h1 className='flex gap-5 justify-center items-center whitespace-nowrap' >LET'S WORK TOGETHER! <FaAsterisk/></h1>
      <h1 className='flex gap-5 justify-center items-center whitespace-nowrap' >LET'S WORK TOGETHER! <FaAsterisk/></h1>
    </div>
  )
}

export default MovingBanner
