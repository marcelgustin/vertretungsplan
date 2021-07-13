import React from 'react'
import { Text, Box } from '@chakra-ui/react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
  } from "@chakra-ui/react"

const Home = () => {
    return (
        <Box marginLeft='2rem' marginRight='2rem'>
            <Table variant="simple">
                <TableCaption placement='top'>Kasseler Straße</TableCaption>
                <Thead>
                    <Tr>
                    <Th>Klasse</Th>
                    <Th>Kurs</Th>
                    <Th>Stunde</Th>
                    <Th isNumeric>Art</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>11BG</Td>
                        <Td>E2M_Pd20</Td>
                        <Td>1-2</Td>
                        <Td isNumeric>Ausfall</Td>
                    </Tr>
                    <Tr>
                        <Td>11BG</Td>
                        <Td>E2M_Pd20</Td>
                        <Td>1-2</Td>
                        <Td isNumeric>Ausfall</Td>
                    </Tr>
                </Tbody>
            </Table>
            <Table variant="simple">
                <TableCaption placement='top'>Kloster Straße</TableCaption>
                <Thead>
                    <Tr>
                    <Th>Klasse</Th>
                    <Th>Kurs</Th>
                    <Th>Stunde</Th>
                    <Th isNumeric>Art</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>11BG</Td>
                        <Td>E2M_Pd20</Td>
                        <Td>1-2</Td>
                        <Td isNumeric>Ausfall</Td>
                    </Tr>
                    <Tr>
                        <Td>11BG</Td>
                        <Td>E2M_Pd20</Td>
                        <Td>1-2</Td>
                        <Td isNumeric>Ausfall</Td>
                    </Tr>
                </Tbody>
            </Table>
        </Box>
    )
}

export default Home
