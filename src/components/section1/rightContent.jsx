import 'remixicon/fonts/remixicon.css'
import RightCard from './rightCard'
const rightContent = (prop) => {
  return (
 <div id='right' className='rounded-4xl overflow-x-auto gap-10 flex flex-nowrap h-full p-6 w-2/3'>
      {prop.users.map(function(elem,idx){
          return <RightCard img={elem.img} tag={elem.tag} key={idx} id={idx} color={elem.color} />
      }
      )}

     
 </div>
  )
}

export default rightContent