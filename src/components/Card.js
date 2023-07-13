import { Box } from '@chakra-ui/react'
import React from 'react'

export default function Card({ children }) {
  return (
    <Box bg={'white'} borderRadius={'6px'} padding={'20px'} boxShadow={'box-shadow: 0 0 12px 0 rgba(0,0,0,.2);'}>
        { children }
    </Box>
  )
}
