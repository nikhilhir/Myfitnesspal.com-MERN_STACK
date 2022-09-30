import { Td, Tr } from '@chakra-ui/react'
import React from 'react'

const Tablecontent = ({p1,p2,im1}) => {
  return (
    <Tr>
            <Td width="90%" textAlign={"left"}>
                <p className='boldp left'>{p1}</p>
                <p className='gray left'>{p2}</p>
            </Td>
            <Td><img src={im1} alt="" /></Td>
            <Td><img src="https://www.myfitnesspal.com/_next/static/media/check-mark.a58300ae.svg" alt="" /></Td>
    </Tr>
  )
}

export default Tablecontent