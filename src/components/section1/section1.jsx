import React from 'react'
import Navbar from "./navbar"
import Pagecontent from "./page1content"

const section1 = () => {
  return (
     <div className='h-screen w-full'>
        <Navbar />
        <Pagecontent />
     </div>
     
  )
}

export default section1