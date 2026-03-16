import React from 'react'
import LeftContent from "./leftContent"
import RightContent from "./rightContent"


const page1content = (prop) => {
  return (
    <div className='h-[90vh] flex items-center justify-between gap-10 pb-16 pt-6 px-18'>
         <LeftContent />
         <RightContent users={prop.users}/>

    </div>
  )
}

export default page1content