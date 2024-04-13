import React from 'react'
import sadDog from "../assets/sadDog.jpg"

const NotFound = () => {
  return (
    <div className='w-full h-full'>
        <div className=''>
        <img src={sadDog} alt="notFound"  className='w-full h-full relative opacity-[0.8]'/>
     <h2 className=' text-3xl lg:text-7xl font-bold text-center absolute top-64 left-44'>...Opps Page not found</h2>
        </div>
  
    </div>
  )
}

export default NotFound