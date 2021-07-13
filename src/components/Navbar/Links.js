import React, { useState } from 'react'
import { Stack, Button, Link, Center } from '@chakra-ui/react'
import {Link as ReactLink } from 'react-router-dom'

const Links = () => {

    const [isLogin, setLogin] = useState(true)

    const handleClick = () => setLogin(!isLogin)
    return (
        <>
            <Stack direction="row" spacing={10} w="100%" align="center" justify="center">
                <Link as={ReactLink} to='/' minWidth='6rem'>
                    <Center>Meine Kurse</Center>
                </Link>
                <Link as={ReactLink} to='/alle-kurse' minWidth='6rem'>
                    <Center>Alle Kurse</Center>
                </Link>
                <Link as={ReactLink} to='/stundenplan' minWidth='6rem'>
                    <Center>Stundenplan</Center>
                </Link>
                <Link onClick={handleClick} as={ReactLink} to='/login' minWidth='6rem'>
                    <Center>{isLogin ? 'Logout' : 'Login'}</Center>
                </Link>
            </Stack>
        </>
    )
}

export default Links
