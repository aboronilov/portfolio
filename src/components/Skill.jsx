import React from 'react'

const Skill = ({image}) => {
  return (
    <div>
        <img 
            className='rounded-full border border-gray-500 w-24 h-24'
            src={image}
        />
    </div>
  )
}

export default Skill