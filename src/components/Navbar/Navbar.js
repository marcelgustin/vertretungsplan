import React from 'react'
import Links from './Links'
import Logo from './Logo'
import { Box, Center, Grid, GridItem } from '@chakra-ui/react'

const Navbar = () => {
    return (
        <>
        <Grid
            h="100%"
            w="100%"
            gap={1}
            templateColumns=".1fr .2fr 2fr 1fr .1fr"
        >
            <GridItem></GridItem>
            <GridItem bg="none"><Center h="100%"><Logo /></Center></GridItem>
            <GridItem></GridItem>
            <GridItem><Center h="100%"><Links /></Center></GridItem>
            <GridItem></GridItem>
        </Grid>
        </>
    )
}

export default Navbar
