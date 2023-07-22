import React , { useEffect , useState } from 'react'
import './Today.css'
import { Box, CardHeader, Container, Heading , Flex, HStack , Center , Text, VStack, GridItem , Grid} from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTemperatureThreeQuarters , faDroplet, faWind, faPersonDressBurst, faBurst, faLowVision, faEye, faSun } from '@fortawesome/free-solid-svg-icons'
import Card from '../Card'
import { useFetch } from '../../hooks/useFetch'
import SkeletonCards from '../SkeletonCards'

export default function Today() {
    
    const time = new Date().toLocaleTimeString()
    let { data , loading , error } = useFetch(`/forecast.json?aqi=yes&days=1`)
    let todayForecast = data?.forecast?.forecastday[0]  
    let location = data?.location?.name + " , " + data?.location?.country 

  return (
    <>
        {
            loading ? 
            <>
                <SkeletonCards/>
                <SkeletonCards my={'15px'} />
                <SkeletonCards/>
            </>
            :
            <Container maxW={'3xl'} className="today-component container">
                <Card p={'0'}>

                    <Flex className="card-header"
                    alignItems={'end'}
                    p={'10px 15px'}
                    bg={'#04344c'} 
                    gap={'18px'}
                    borderTopLeftRadius={'6px'} 
                    borderTopRightRadius={'6px'}>
                        <Heading size={[ 'sm' , 'md']} fontWeight={'500'} color={'white'}> {location} </Heading>
                        <Heading size={['xs','sm']} color={'white'} fontWeight={'regular'} >  As of {time} </Heading>
                    </Flex>

                    <Box className="card-body" p={'0px 15px'}>
                        <Flex justifyContent={'space-between'} alignItems={'center'} mt={'10px'}>
                            <Heading size={'4xl'} >{parseInt(data?.current?.temp_c)}°</Heading>
                            <img src={data?.current?.condition?.icon} alt="" />
                        </Flex>
                        <Heading size={'md'} mt={'10px'} mb={'6px'} > { data?.current?.condition?.text } </Heading>
                        <HStack gap={'10px'} alignItems={'center'} pb={'10px'}>
                            <Heading size={'md'} >Day {parseInt(data?.forecast?.forecastday[0]?.day?.maxtemp_c)} °</Heading>
                            <Heading size={'md'} fontWeight={'900'} mb={'8px'} >.</Heading>
                            <Heading size={'md'} >Night {parseInt(data?.forecast?.forecastday[0]?.day?.mintemp_c)} °</Heading>
                        </HStack>
                    </Box>

                </Card>

                <Card mt={'15px'}>
                    <Heading size={['md']}>Today's forecast for {location} </Heading>
                    <Grid templateColumns={['repeat(2, 1fr)' , 'repeat(4,1fr) ']} gap={2} mt={'15px'} rowGap={'25px'}>
                            <GridItem>
                                <VStack  borderRight={'1px solid rgba(0, 0, 0, 0.36)'}>
                                    <Text fontWeight={'400'}>Morning</Text>
                                    <Heading color={'blue.600'}> {parseInt(todayForecast?.hour[6]?.temp_c)}°</Heading>
                                    <img src={todayForecast?.hour[6]?.condition?.icon} alt="" />
                                    <Text fontWeight={'700'}>{todayForecast?.hour[6]?.chance_of_rain} % </Text>
                                </VStack>
                            </GridItem>
                            <GridItem>
                                <VStack  borderRight={[ '' , '1px solid rgba(0, 0, 0, 0.36)']}>
                                    <Text fontWeight={'400'}>Afternoon</Text>
                                    <Heading color={'blue.600'}> {parseInt(todayForecast?.hour[13]?.temp_c)}°</Heading>
                                    <img src={todayForecast?.hour[13]?.condition?.icon} alt="" />
                                    <Text fontWeight={'700'}>{todayForecast?.hour[13]?.chance_of_rain} % </Text>
                                </VStack>
                            </GridItem>
                            <GridItem>                        
                                <VStack  borderRight={'1px solid rgba(0, 0, 0, 0.36)'}>
                                    <Text fontWeight={'400'}>Evening</Text>
                                    <Heading color={'blue.600'}> {parseInt(todayForecast?.hour[20]?.temp_c)}°</Heading>
                                    <img src={todayForecast?.hour[20]?.condition?.icon} alt="" />
                                    <Text fontWeight={'700'}>{todayForecast?.hour[20]?.chance_of_rain} % </Text>
                                </VStack>
                            </GridItem>
                            <GridItem>                        
                                <VStack >
                                    <Text fontWeight={'400'}>Overnight</Text>
                                    <Heading color={'blue.600'}> {parseInt(todayForecast?.hour[0]?.temp_c)}°</Heading>
                                    <img src={todayForecast?.hour[0]?.condition?.icon} alt="" />
                                    <Text fontWeight={'700'}>{todayForecast?.hour[0]?.chance_of_rain} % </Text>
                                </VStack>
                            </GridItem>
                        
                    </Grid>
                </Card>

                <Card mt={'15px' } mb={'60px'}>
                    <Heading size={'md'}>Weather Today in { location }</Heading>
                    <Heading size={'2xl'} mt={'20px'}> {data?.current.feelslike_c}° </Heading>
                    <Text>Feels like</Text>

                    <Grid templateColumns={[ '1fr' , '1fr 1fr']} gap={'12px'} mt={'30px'}  mx={'-20px'} rowGap={'10px'} >
                        <Flex justifyContent={'space-between'} alignItems={'center'} pb={'8px'} borderBottom={'1px solid rgba(0, 0, 0, 0.36)'} px={'20px'}>
                            <HStack>
                                <FontAwesomeIcon icon={faTemperatureThreeQuarters} />
                                <Text>High/Low</Text>
                            </HStack>
                            <Text>{ data?.forecast?.forecastday[0]?.day.maxtemp_c + '°/' + data?.forecast?.forecastday[0]?.day.mintemp_c + "°" }</Text>
                        </Flex>
                        <Flex justifyContent={'space-between'} alignItems={'center'} pb={'8px'} borderBottom={'1px solid rgba(0, 0, 0, 0.36)'} px={'20px'}>
                            <HStack>
                                <FontAwesomeIcon icon={faWind} />
                                <Text>Wind</Text>
                            </HStack>
                            <Text>{ data?.current.wind_kph } km/h</Text>
                        </Flex>
                        <Flex justifyContent={'space-between'} alignItems={'center'} pb={'8px'} borderBottom={'1px solid rgba(0, 0, 0, 0.36)'} px={'20px'}>
                            <HStack>
                                <FontAwesomeIcon icon={faDroplet} />
                                <Text>Humidity</Text>
                            </HStack>
                            <Text>{ data?.current.humidity }%</Text>
                        </Flex>
                        <Flex justifyContent={'space-between'} alignItems={'center'} pb={'8px'} borderBottom={'1px solid rgba(0, 0, 0, 0.36)'} px={'20px'}>
                            <HStack>
                                <FontAwesomeIcon icon={faBurst} />
                                <Text>Pressure</Text>
                            </HStack>
                            <Text>{ data?.current.pressure_mb} mb</Text>
                        </Flex>
                        <Flex justifyContent={'space-between'}  borderBottom={[ '1px solid rgba(0, 0, 0, 0.36)', 'none']}
                        alignItems={'center'} pb={'8px'}  px={'20px'}>
                            <HStack>
                                <FontAwesomeIcon icon={faEye} />
                                <Text>Visibility</Text>
                            </HStack>
                            <Text>{ data?.current.vis_km} km</Text>
                        </Flex>
                        <Flex justifyContent={'space-between'} 
                        alignItems={'center'} 
                        pb={'8px'} 
                        px={'20px'}>
                            <HStack>
                                <FontAwesomeIcon icon={faSun} />
                                <Text>UV Index</Text>
                            </HStack>
                            <Text>{ data?.current.uv} of 11</Text>
                        </Flex>
                    </Grid>

                </Card>
            </Container>

        }
    </>
  )
}
