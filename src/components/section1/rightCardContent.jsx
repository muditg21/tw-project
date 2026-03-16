import React from 'react'

const rightCardContent = (prop) => {
  return (
    <div className='absolute top-0 h-full w-full p-8 flex flex-col justify-between'>
        <h2 className='bg-amber-50 rounded-full h-10 w-10 flex items-center justify-center '>{prop.id+1}</h2>
        <div >
            <p className='text-shadow-4xs px-2 bg-black/20 text-xl leading-relaxed text-white mb-14'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum nulla fugiat reprehenderit esse eum deserunt?</p>
            <div className='flex justify-between '>
                <button style={{backgroundColor:prop.color}} className='text-white font-medium px-8 py-2 rounded-full'>{prop.tag}</button>
                <button style={{backgroundColor:prop.color}} className=' text-white h-8 w-8 rounded-full flex items-center justify-center'><i className="ri-arrow-right-line"></i></button>
            </div>
        </div>
    </div>
  )
}

export default rightCardContent