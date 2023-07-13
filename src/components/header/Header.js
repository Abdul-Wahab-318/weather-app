import { Box, Container, Flex, Img, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import React , { useState } from 'react'
import Logo from '../Logo'

export default function Header() {

    let [ query , setQuery ] = useState("")

    let handleChange = ( e ) => {
        setQuery( e.target.value )
    }

    console.log(query)

  return (
    <header className="header">
        <Box bg={'#005986'} py={'15px'} >
            <Container maxW={'1280px'}>
                <Flex justify={'space-between'} alignItems={'center'}>
                    <Logo/>
                    <InputGroup>

                            <Input value={query} 
                            textAlign={'center'}
                            maxW={['200px','380px']}
                            bg={'hsla(0,0%,100%,.2)'} 
                            color={'white'} 
                            placeholder='Search City' 
                            size={'md'} 
                            borderRadius={'60px'}
                            _placeholder={{color:'white'}}
                            focusBorderColor='white'

                            onChange={handleChange} />
                            <InputRightElement>
                            </InputRightElement>
                    </InputGroup>
                    <Box></Box>
                </Flex>
            </Container>
        </Box>
    </header>
  )
}
