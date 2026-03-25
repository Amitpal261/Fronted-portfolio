import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const Button = ({text}) => {
  return (
   <button className="absolute right-40 bottom-10 group cursor-pointer border border-white px-6 py-2 rounded-full text-text flex items-center gap-2 backdrop-blur-md bg-bg/10 hover:bg-bg hover:text-text transition-all duration-300 hover:scale-110">
  
  <span>{text}</span>
  <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />
</button>
  )
}

export default Button
