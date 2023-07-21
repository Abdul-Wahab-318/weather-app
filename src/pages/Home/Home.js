import React from 'react'
import './Home.css'
import { useLocation } from '../../context/LocationProvider'
import Card from '../../components/Card'
import { Box, Container , Button , Tab , TabList , Tabs , TabPanels , TabPanel ,HStack} from '@chakra-ui/react'
import api from '../../api'
import axios from 'axios'
import Today from '../../components/today/Today'
import Hourly from '../../components/hourly/Hourly'
export default function Home() {

    const { location , updateLocation } = useLocation()


  return (
    <Box as='div' pt={'40px'} className='home-page'>
      
        <Tabs isFitted variant='unstyled' isLazy>
          <TabList mb='1em' className='tab-wrapper' _focus={'none'} color={'white'}>
            <HStack className="container" spacing={'40px'} >
              <Tab p={'10px 15px'} borderBottom={'3px solid transparent'} _selected={{ borderBottom: '3px solid white'}}>Today</Tab>
              <Tab p={'10px 15px'} borderBottom={'3px solid transparent'} _selected={{ borderBottom: '3px solid white'}}>Hourly</Tab>
              <Tab p={'10px 15px'} borderBottom={'3px solid transparent'} _selected={{ borderBottom: '3px solid white'}}>Weekly</Tab>
            </HStack>
          </TabList>
          <TabPanels className='container'>
            <TabPanel>
              <Today/>
            </TabPanel>
            <TabPanel>
              <Hourly/>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>

    </Box>
  )
}
