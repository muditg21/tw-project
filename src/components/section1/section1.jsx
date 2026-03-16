import React from 'react'
import Navbar from "./navbar"
import Pagecontent from "./page1content"

const section1 = (prop) => {
  return (
     <div className='h-screen w-full'>
        <Navbar />
        <Pagecontent users={prop.users}/>
     </div>
     
  )
}

export default section1