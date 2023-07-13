import React from 'react'
import './Home.css'
import { useLocation } from '../../context/LocationProvider'
import Card from '../../components/Card'
import { Box, Container } from '@chakra-ui/react'

export default function Home() {

    const { location , updateLocation } = useLocation()

    console.log(location)


  return (
    <Box as='div' pt={'40px'} className='home-page container'>
        <Card>
          nibba balls
        </Card>
    </Box>
  )
}
