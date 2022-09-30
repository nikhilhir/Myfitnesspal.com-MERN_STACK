import React from 'react'

const Badge = ({imgsrc,p1,p2}) => {
  return (
    <div>
        <img src={imgsrc} alt="" className='badgeimg'/>
        <p className='boldp'>{p1}</p>
        <p className='gray'>{p2}</p>
    </div>
  )
}

export default Badge;