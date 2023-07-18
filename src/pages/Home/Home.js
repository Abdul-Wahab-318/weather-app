import React from 'react'
import './Home.css'
import { useLocation } from '../../context/LocationProvider'
import Card from '../../components/Card'
import { Box, Container , Button } from '@chakra-ui/react'
import api from '../../api'
import axios from 'axios'
export default function Home() {

    const { location , updateLocation } = useLocation()

    console.log(location)

    let fetchData = async ( location ) => {
      console.log("balss")
      let url = api + `&q=${location.latitude},${location.longitude}&aqi=yes` ;

      try{
        let data = await axios.get( url )
        console.log(data)
      }
      catch(err)
      {
        console.log(err)
      }

    }

  return (
    <Box as='div' pt={'40px'} className='home-page container'>
        <Card >
          <Button onClick={()=> fetchData(location)}>fetch</Button>
        </Card>
    </Box>
  )
}
