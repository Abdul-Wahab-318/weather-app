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
import { faCloud, faCloudRain, faDroplet, faSun, faTemperature0, faWind} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Table({ data , location }) {

    console.log( data )

  return (
    <Card>
        <HStack>
            <Heading size={'md'}>Hourly Weather - </Heading>
            <Text> { location.name + " , " + location.country} </Text>
        </HStack>
        <Text my={'10px'} mb={'25px'}>As of { new Date().toLocaleTimeString() }</Text>
        <Accordion defaultIndex={[0]} allowMultiple>
            {
                data.map( el => <TableRow data={el} />)
            }
        </Accordion>
    </Card>
  )
}

const TableRow = ( { data } ) => {

    return (
        
        <AccordionItem>
            <h2>
            <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                    <Grid justifyContent={'space-between'} alignItems={'center'} templateColumns={'repeat(4,1fr)'} >
                        <Text>
                            { new Date(data.time).toLocaleTimeString() }
                        </Text>
                        <Text fontWeight={'600'}>
                            { data.temp_c }°
                        </Text>
                        <HStack >
                            <img src={data.condition.icon} width={'35px'} alt="" />
                            <Text fontSize={'sm'}>{data.condition.text}</Text>
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