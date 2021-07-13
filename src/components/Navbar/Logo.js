import React from 'react'
import { Stack, IconButton, Box, Icon } from '@chakra-ui/react'
import { PhoneIcon, AddIcon, WarningIcon, InfoIcon } from '@chakra-ui/icons'
import {Link as ReactLink } from 'react-router-dom'

const Logo = () => {
    return (
        <>
            <Box>
                <IconButton as={ReactLink} to='/' variant="none" aria-label="Home" icon={<InfoIcon />} />
            </Box>
        </>
    )
}

export default Logo
