import React , { useEffect , useState } from 'react'
import Table from '../Table'
import { useFetch } from '../../hooks/useFetch'
import Card from '../Card'
export default function Hourly() {

    let { data , isLoading } = useFetch("/forecast.json?days=3")
    console.log(data)
  return (
    <>
        {
            isLoading ? <Card>loading ... </Card> : <Table location = {data.location} data={data.forecast.forecastday[0].hour} />
        }
    </>
  )
}
