import { Box, Container, Flex, Img, Input, InputGroup, InputRightElement , Button } from '@chakra-ui/react'
import React , { useState } from 'react'
import Logo from '../Logo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useLocation } from '../../context/LocationProvider'
export default function Header() {

    let [ query , setQuery ] = useState("")
    let { location , updateLocation } = useLocation()

    let handleChange = ( e ) => {
        setQuery( e.target.value )
    }


    let handleSubmit = (event) => {
        if ( event.key === 'Enter' || event.type === 'click' )
        {
            updateLocation( query )
        }
    }

  return (
    <header className="header" style={{'backgroundColor' : '#005986'}}>
        <Box bg={'#005986'} py={'15px'} >
            <Container maxW={'1280px'}>
                <Flex justify={'space-between'} alignItems={'center'}>
                    <Logo/>
                    <InputGroup display={'flex'} justifyContent={'center'} maxW={['200px','380px']} >
                        <Input value={query} 
                        textAlign={'center'}
                        onKeyDown={handleSubmit}
                        bg={'hsla(0,0%,100%,.2)'} 
                        color={'white'} 
                        placeholder='Search City' 
                        size={'md'} 
                        borderRadius={'60px'}
                        _placeholder={{color:'white'}}
                        focusBorderColor='white'

                        onChange={handleChange} />
                        <InputRightElement onClick={handleSubmit}>
                            <Button backgroundColor={'transparent'} _hover={'none'}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#ffffff",}} />
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                    <Box ></Box>
                </Flex>
            </Container>
        </Box>
    </header>
  )
}
