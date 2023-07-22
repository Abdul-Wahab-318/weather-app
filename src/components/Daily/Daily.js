import React from 'react'
import Table, { DailyTableRow } from '../Table'
import { useFetch } from '../../hooks/useFetch'
import Card from '../Card'
import SkeletonCards from '../SkeletonCards'
import { HStack , Heading , Text } from '@chakra-ui/react'
import { HourlyTableRow } from '../Table'
export default function Daily() {

    let { data , loading , error } = useFetch("/forecast.json?days=3&aqi=no&alerts=no&hour=0")

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
            data={data.forecast.forecastday} 
            error = {error}
            render={ (data) => <DailyTableRow data={data} /> }>

                <HStack>
                    <Heading size={'md'}>3 Day Weather - </Heading>
                    <Text> { data.location.name + " , " + data.location.country} </Text>
                </HStack>

            </Table>
        }
    </>
  )
}
