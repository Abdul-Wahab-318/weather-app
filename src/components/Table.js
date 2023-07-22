import React from 'react'
import Card from './Card'
import { 
    Accordion , 
    AccordionButton, 
    AccordionPanel , 
    AccordionItem , 
    AccordionIcon , 
    Box , 
    Heading , 
    Text , 
    HStack ,
    Flex ,
    Grid ,
    VStack
} from '@chakra-ui/react'
import { faCloud, faCloudRain, faCloudSunRain, faDroplet, faMoon, faSun, faTemperature0, faWind} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Table({ data , children , render , error }) {

    const notify = ( message ) => toast( message , 
        {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        }
      )
    
    if ( error )
        notify( error.message )

  return (
    <Card>
        
        { // display any info before rows such as heading
            children
        }
        <Text my={'10px'} mb={'25px'}>As of { new Date().toLocaleTimeString() }</Text>
        <Accordion defaultIndex={[0]} allowMultiple>
            {
                data.map( ( el , ind ) => render( el ) )
            }
        </Accordion>

        <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        />

    </Card>
  )
}

export const HourlyTableRow = ( { data } ) => {

    return (
        
        <AccordionItem>
            <h2>
            <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                    <Grid justifyContent={'space-between'} alignItems={'center'} templateColumns={'repeat(4,1fr)'} >
                        <Text fontSize={['xs' , 'md']} >
                            { new Date(data.time).toLocaleTimeString() }
                            {/* { data.time.substr(-5)} */}
                        </Text>
                        <Text fontWeight={'600'} align={'center'}>
                            { parseInt(data.temp_c) }°
                        </Text>
                        <HStack justifyContent={['center' , 'center' , 'start']}>
                            <img src={data.condition.icon} width={'35px'} alt="" />
                            <Text fontSize={'sm'} display={['none','none','block']} >{data.condition.text}</Text>
                        </HStack>
                        <HStack justifyContent={'center'}>
                            <FontAwesomeIcon icon={faDroplet} color='#2b6cb0' />
                            <Text fontSize={'sm'}>{data.chance_of_rain}%</Text>
                        </HStack>
                    </Grid>
                </Box>
                <AccordionIcon />
            </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            <Grid 
            templateColumns={'1fr 1fr 1fr'} 
            justifyItems={'center'} 
            rowGap={'20px'}
            border={'1px solid gray'} 
            borderColor={'gray.200'} 
            borderRadius={'5px'} 
            p={'10px 20px'}>

                <HStack>
                    <FontAwesomeIcon icon={faTemperature0} color='#2b6cb0' />
                    <div>
                        <Text fontSize={'sm'} mb={'0'}>Feels like</Text>
                        <Text  fontWeight={'500'}>{data.feelslike_c}°</Text>
                    </div>
                </HStack>
                <HStack >
                    <FontAwesomeIcon icon={faWind} color='#2b6cb0' />
                    <div>
                        <Text fontSize={'sm'} mb={'0'}>Wind</Text>
                        <Text  fontWeight={'500'}>{data.wind_kph} km/h</Text>
                    </div>
                </HStack>
                <HStack >
                    <FontAwesomeIcon icon={faDroplet} color='#2b6cb0' />
                    <div>
                        <Text fontSize={'sm'} mb={'0'}>Humidity</Text>
                        <Text  fontWeight={'500'}>{data.humidity}%</Text>
                    </div>
                </HStack>

                
                <HStack>
                    <FontAwesomeIcon icon={faSun} color='#2b6cb0' />
                    <div>
                        <Text fontSize={'sm'} mb={'0'}>UV Index</Text>
                        <Text  fontWeight={'500'}>{data.uv} of 11</Text>
                    </div>
                </HStack>
                <HStack >
                    <FontAwesomeIcon icon={faCloud} color='#2b6cb0' />
                    <div>
                        <Text fontSize={'sm'} mb={'0'}>Cloud cover</Text>
                        <Text  fontWeight={'500'}>{data.cloud}%</Text>
                    </div>
                </HStack>
                <HStack >
                    <FontAwesomeIcon icon={faCloudRain} color='#2b6cb0' />
                    <div>
                        <Text fontSize={'sm'} mb={'0'}>Rain amount</Text>
                        <Text  fontWeight={'500'}>{data.precip_mm} mm </Text>
                    </div>
                </HStack>
                
            </Grid>
            </AccordionPanel>
        </AccordionItem>

    )

}

export const DailyTableRow = ( { data } ) => {

    return (
        <AccordionItem>
            <h2>
                <AccordionButton>
                    <Box as="span" flex='1' textAlign='left'>
                        <Grid justifyContent={'space-between'} alignItems={'center'} templateColumns={'repeat(4,1fr)'} >
                            <Text fontSize={['xs' , 'md']} >
                                { getDayName(data.date) }
                            </Text>
                            <Text fontWeight={'600'} align={'center'}>
                                { parseInt(data.day.maxtemp_c) }° / { parseInt(data.day.mintemp_c) }°
                            </Text>
                            <HStack justifyContent={['center' , 'center' , 'start']}>
                                <img src={data.day.condition.icon} width={'35px'} alt="" />
                                <Text fontSize={'sm'} display={['none','none','block']} >{data.day.condition.text}</Text>
                            </HStack>
                            <HStack justifyContent={'center'}>
                                <FontAwesomeIcon icon={faDroplet} color='#2b6cb0' />
                                <Text fontSize={'sm'}>{data.day.daily_chance_of_rain}%</Text>
                            </HStack>
                        </Grid>
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
                <DayCard data = {data} />
            </AccordionPanel>
        </AccordionItem>
    )

}

const DayCard = ( { data } ) => {

    const nightHour = data.hour[0]
    
    return (
        <Grid 
            templateColumns={[ '1fr' , '1fr' , '1fr 1fr ']} 
            // justifyItems={'center'} 
            rowGap={'20px'}
            columnGap={'30px'}
            // border={'1px solid gray'} 
            // borderColor={'gray.200'} 
            borderRadius={'5px'} 
            // p={'10px 20px'}
            >

                <Box>
                    <Text fontSize={'md'} mb={'-8px'}> Day</Text>
                    <HStack justifyContent={'space-between'}>
                        <HStack>
                            <Heading fontSize={'4xl'}>{parseInt(data.day.maxtemp_c)}°</Heading>
                            <img src={data.day.condition.icon} alt="" />
                        </HStack>
                        <VStack>
                            <HStack gap={'20px'}><FontAwesomeIcon icon={faCloudRain} color='#2b6cb0' /> <Text fontSize={'xs'}>{data.day.daily_chance_of_rain}%</Text> </HStack>
                            <HStack><FontAwesomeIcon icon={faWind} color='#2b6cb0' /> <Text fontSize={'xs'}>{data.day.maxwind_kph}km/h</Text> </HStack>
                        </VStack>
                    </HStack>
                    <Text mb={'20px'}>{data.day.condition.text}</Text>
                    <Grid templateColumns={[ '1fr 1fr ']} rowGap={'20px'} border={'1px solid gray'} justifyItems={'center'} borderRadius={'6px'}  borderColor={'gray.200'} p={'10px 20px'} >                    
                        <HStack>
                            <FontAwesomeIcon icon={faDroplet} color='#2b6cb0' />
                            <div>
                                <Text fontSize={'sm'} mb={'0'}>Humidity</Text>
                                <Text  fontWeight={'500'}>{data.day.avghumidity}%</Text>
                            </div>
                        </HStack>
                        <HStack >
                            <FontAwesomeIcon icon={faSun} color='#2b6cb0' />
                            <div>
                                <Text fontSize={'sm'} mb={'0'}>UV Index</Text>
                                <Text  fontWeight={'500'}>{data.day.uv} of 11</Text>
                            </div>
                        </HStack>
                        <HStack >
                            <FontAwesomeIcon icon={faSun} color='#2b6cb0' />
                            <div>
                                <Text fontSize={'sm'} mb={'0'}>Sunrise</Text>
                                <Text fontSize={'sm'}>{data.astro.sunrise}</Text>
                            </div>
                        </HStack>
                        <HStack>
                            <FontAwesomeIcon icon={faMoon} color='#2b6cb0' />
                            <div>
                                <Text fontSize={'sm'} mb={'0'}>Sun set</Text>
                                <Text  fontSize={'sm'}>{data.astro.sunset}</Text>
                            </div>
                        </HStack>
                    </Grid>
                </Box>
                
                <Box>
                    <Text fontSize={'md'} mb={'-8px'}> Night</Text>
                    <HStack justifyContent={'space-between'}>
                        <HStack>
                            <Heading fontSize={'4xl'}>{parseInt(nightHour.temp_c)}°</Heading>
                            <img src={nightHour.condition.icon} alt="" />
                        </HStack>
                        <VStack>
                            <HStack gap={'20px'}><FontAwesomeIcon icon={faCloudRain} color='#2b6cb0' /> <Text fontSize={'xs'}>{nightHour.chance_of_rain}%</Text> </HStack>
                            <HStack><FontAwesomeIcon icon={faWind} color='#2b6cb0' /> <Text fontSize={'xs'}>{nightHour.wind_kph}km/h</Text> </HStack>
                        </VStack>
                    </HStack>
                    <Text mb={'20px'}>{nightHour.condition.text}</Text>
                    <Grid templateColumns={[ '1fr 1fr ']} rowGap={'20px'} border={'1px solid gray'} justifyItems={'center'} borderRadius={'6px'}  borderColor={'gray.200'} p={'10px 20px'} >                    
                        <HStack>
                            <FontAwesomeIcon icon={faDroplet} color='#2b6cb0' />
                            <div>
                                <Text fontSize={'sm'} mb={'0'}>Humidity</Text>
                                <Text  fontWeight={'500'}>{nightHour.humidity}%</Text>
                            </div>
                        </HStack>
                        <HStack >
                            <FontAwesomeIcon icon={faSun} color='#2b6cb0' />
                            <div>
                                <Text fontSize={'sm'} mb={'0'}>UV Index</Text>
                                <Text  fontWeight={'500'}>{nightHour.uv} of 11</Text>
                            </div>
                        </HStack>
                        <HStack >
                            <FontAwesomeIcon icon={faMoon} color='#2b6cb0' />
                            <div>
                                <Text fontSize={'sm'} mb={'0'}>Moon rise</Text>
                                <Text fontSize={'sm'}>{data.astro.moonrise}</Text>
                            </div>
                        </HStack>
                        <HStack>
                            <FontAwesomeIcon icon={faMoon} color='#2b6cb0' />
                            <div>
                                <Text fontSize={'sm'} mb={'0'}>Moon set</Text>
                                <Text  fontSize={'sm'}>{data.astro.moonset}</Text>
                            </div>
                        </HStack>
                    </Grid>
                </Box>

                
            </Grid>
    )
}

const getDayName = ( date ) => {
        
    let map = { 1 : 'Mon', 2 : 'Tue' , 3 : 'Wed' , 4 : 'Thu' , 5 : 'Fri' , 6 : 'Sat' , 0 : 'Sun' }
    let today = new Date()
    let day = new Date( date )

    // if it is today
    if ( today.getDay() === day.getDay() )
    return 'Today'
    
    return map[day.getDay()] + ' ' + day.getDate() 
}