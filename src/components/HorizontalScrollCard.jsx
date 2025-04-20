import React, { useRef } from 'react'
import Card from './Card'
import { FaAngleRight,FaAngleLeft } from 'react-icons/fa';

const HorizontalScrollCard = ({data = [], heading, trending, media_type}) => {
    const containerRef=useRef();
    const handleNext = ()=>{
        containerRef.current.scrollLeft += 254
    }
    const handlePrevious = ()=>{
        containerRef.current.scrollLeft -= 254
    }
  return (
    <div className='container mx-auto px-4 py-2 my-2'>
        <h1 className='text-xl lg:text-2xl font-bold  mt-4 mb-4'>{heading }</h1>
        <div className="overflow-hidden relative">
            <div ref={containerRef} className='flex gap-6 overflow-x-auto scrollbar-hide z-10 scroll-smooth transition-all scrollbar-none'>
                {data.map((data, index) => (
                    <Card data={data} key={data.id+heading+index} index={index + 1} trending={trending} media_type={data.media_type || media_type} />
                ))}
            </div>
            <div className='absolute top-0 hidden lg:flex justify-between w-full h-full items-center'>
                <button onClick={handlePrevious} className='bg-white p-1 text-black rounded-full ml-1 z-10'>
                    <FaAngleLeft/>
                </button>
                <button onClick={handleNext} className='bg-white p-1 text-black rounded-full mr-1 z-10'>
                    <FaAngleRight/>
                </button>
            </div>
       </div>
    </div>
  )
}

export default HorizontalScrollCard
