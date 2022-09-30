import { Button, Heading } from '@chakra-ui/react'
import React from 'react'

const Botbadge = ({p1,p2,h,p3}) => {
  return (
    <div className='botbadge'>
        <p className='boldp'>{p1}</p>
        <div className='botin'>
           <p className='boldp'>{p2}</p><br />
           <Heading textAlign={"center"} size={"2xl"}>{h}</Heading><br />
           <p className='gray'>{p3}</p><br />
           <Button width="100%" height="60px" background="#0066EE" color="white">SUBSCRIBE</Button>
        </div>
    </div>
  )
}

export default Botbadge
