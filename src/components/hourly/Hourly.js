import React , { useEffect , useState } from 'react'
import Table from '../Table'
import { HourlyTableRow } from '../Table'
import { useFetch } from '../../hooks/useFetch'
import Card from '../Card'
import SkeletonCards from '../SkeletonCards'
import { HStack , Heading , Text } from '@chakra-ui/react'

export default function Hourly() {

    let { data , loading ,error } = useFetch("/forecast.json?days=3")

  return (
    <>
        {
            loading ? 
            <>
                <SkeletonCards/> 
                <SkeletonCards my={'20px'}/> 
                <SkeletonCards/> 
                <SkeletonCards my={'20px'}/> 
                <SkeletonCards/> 
            </>
            : 
            <Table 
            error={error}
            location = {data.location} 
            data={data.forecast.forecastday[0].hour} 
            render={ (data) => <HourlyTableRow data={data} /> }>

              <HStack>
                <Heading size={'md'}>Hourly Weather - </Heading>
                <Text> { data.location.name + " , " + data.location.country} </Text>
              </HStack>

            </Table>
        }
    </>
  )
}
