import { AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from '@chakra-ui/react'
import React from 'react'

const Faqdrop = ({head,p}) => {
  return (
    <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">{head}</Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}><p className='gray'>{p}</p></AccordionPanel>
            </AccordionItem>
  )
}

export default Faqdrop