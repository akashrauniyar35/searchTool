import { Box, Flex, Heading, Table, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'

function OrderForecast() {
    return (
        <>
            <Box w='100%' boxShadow='2xl' p='6' rounded='md' bg='white'>
                <Flex align="center" mb='4'>
                    <Text fontSize='2xl' mr='4'>Results from</Text>
                    <Heading>"Retrofit and OrderForecast"</Heading>
                    <Text fontSize='2xl' ml='4'> files</Text>
                </Flex>

                <TableContainer p='4'>
                    <Table size='lg'>
                        <Thead bg='yellow.200' color='white'>
                            <Tr >
                                <Th>first_delete</Th>
                                <Th>Last_Delete</Th>
                                <Th>RecordId</Th>
                                <Th>Status</Th>
                                <Th>statuscode</Th>
                                <Th>filename</Th>
                                <Th>lpID</Th>
                                <Th>FullcsvLine</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td></Td>
                                <Td></Td>
                                <Td>61432</Td>
                                <Td>Order Forecast GAID: "10311343" updated.</Td>
                                <Td>671</Td>
                                <Td>LP_06_OrderForecast_20211126_30_01.csv</Td>
                                <Td>26/11/2021 3:04:23 AM</Td>

                                <Text noOfLines={4}>
                                    10311343,0100308773,2,1,0,,,,,,,,,Ford,Ranger,Chassis Cab,2021,DC04MZ,DC04MZ,NSW,,,,30/11/2021,,,MNAUMAF80MW172467,,,1000772044,1000772985,IS130,"BP_SWITCH_SRV,BP_SWT_HDW",Dominelli Ford,"571 Princes Highway , KIRRAWEE , NSW , 2232",Paul Millar,0295459000
                                </Text>



                            </Tr>
                        </Tbody>
                        {/* <Tfoot>
                            <Tr>
                                <Th>To convert</Th>
                            </Tr>
                        </Tfoot> */}
                    </Table>
                </TableContainer>
            </Box>
        </>
    )
}

export default OrderForecast


