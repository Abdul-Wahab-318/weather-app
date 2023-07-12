import React from 'react'
import './Home.css'
import { useLocation } from '../../context/LocationProvider'
import Card from '../../components/Card'
import { Container } from '@chakra-ui/react'

export default function Home() {

    const { location , updateLocation } = useLocation()

    console.log(location)


  return (
    <div className='home-page container'>
        <Card>
          nibba balls
        </Card>
    </div>
  )
}
