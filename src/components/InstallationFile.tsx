import { SearchIcon } from '@chakra-ui/icons'
import { Box, Flex, Heading, Input, Table, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'
import { INTERNALS } from 'next/dist/server/web/spec-extension/request'
import React, { useEffect, useState } from 'react'

function InstallationFine() {
    const [color, setColor] = useState('')





    const tableColors = [
        {
            id: '00',
            color: 'yellow.200',
        },
        {
            id: '01',
            color: 'green.200',
        },
        {
            id: '02',
            color: 'purple.200',
        },
        {
            id: '03',
            color: 'red.200',
        },
        {
            id: '04',
            color: 'teal.200',
        },
    ]

    const data = [
        {
            id: '00',
            title: 'GAID_Delete_Date',
            value: 'VehicleID : State of Registration  : Vehicle Make : Ford Vehicle Model : Ranger Vehicle Body Type : : Vehicle Make : Ford Vehicle Model : Ranger Vehicle Body Type : : Vehicle Make : Ford Vehicle Model : Ranger Vehicle Body Type : Chassis Cab Vehicle Make Year : 2021 Colour : VIN : Engine Number : Engine Size : Description :',
        },
        {
            id: '01',
            title: 'LeasePlanOrderNumber',
            value: '0100308773',
        },
        {
            id: '02',
            title: 'GAID',
            value: '10311343',
        },
        {
            id: '03',
            title: 'VehicleETA',
            value: '30/11/2021',
        },
        {
            id: '04',
            title: 'fwo_FieldWorkOrder',
            value: '61432',
        },
        {
            id: '05',
            title: 'fwo_Details',
            value: '26121',
        },
        {
            id: '05',
            title: 'fwo_Details',
            value: '26121',
        },
        {
            id: '05',
            title: 'fwo_Details',
            value: '26121',
        },
        {
            id: '05',
            title: 'fwo_Details',
            value: '26121',
        },
        {
            id: '05',
            title: 'fwo_Details',
            value: '26121',
        },
        {
            id: '06',
            title: 'fwo_Reply',
            value: 'case Reference ID: Installed GPS Location: Top of dash Parts Used: TX640 kit with BP switch Work Done: New Install TX640 kit with BP switch Users comment: Tested ok',
        },
    ]

    const _VEH_ = [
        {
            id: '00',
            title: 'first_delete',
            value1: '',
            value2: '',
        },
        {
            id: '01',
            title: 'Last_Delete',
        },
        {
            id: '02',
            title: 'RecordId',
            value1: '316452',
            value2: '267455',
        },
        {
            id: '03',
            title: 'VehicleETA',
            value: '30/11/2021',
        },
        {
            id: '04',
            title: 'Status',
            value1: 'Vehicle GAID "10311343" updated. CRM InstallRegister record Serial "868963044835296" Updated.',
            value2: 'Vehicle GAID "10311343" cannot be updated - GAID does not exist.',
        },
        {
            id: '05',
            title: 'statuscode',
            value1: '470',
            value2: '411',
        },
        {
            id: '05',
            title: 'File Name',
            value1: 'LP_05_VEH_20220613_3890_01.csv',
            value2: 'LP_05_VEH_20211129_147_01.csv',
        },
        {
            id: '05',
            title: 'Create Date',
            value1: '13/06/2022 3:36:56 AM',
            value2: '29/11/2021 3:03:59 AM',
        },
        {
            id: '05',
            title: 'Full csv Line',
            value1: '10311343,2,DC04MZ,DC04MZ,NSW,1000875967,.,.,Ford,Ranger,Chassis Cab,2021,,MNAUMAF80MW172467,,,1000837990 ,"UPDATE InstallRegister SET inst_vehicle_regovehicle_statst_vehicle_fleetno = inst_vehic, inst_vehicle_modehicle_year = 2021, inst_vehicle_vit_engineer_portal_lot_UpdatedBy = 1, inst_TimeStamp = GETDATE(), inst_UpdatedDate = GETDATE() WHERE inst__installregister IN (35445) AND inst_Deleted IS NULL',
            value2: '10311343,2,DC04MZ,DC04MZ,NSW,1000772985,,,Ford,Ranger,Chassis Cab,2021,,MNAUMAF80MW172467,,,1000772044',
        },
    ]



    const handleSearch = () => {

    }
    useEffect(() => {
        for (let i = 0; i < 5; i++) {
            tableColors.map((item) => {
                setColor(item.color)
            })
        }
    }, [])


    return (
        <>

            <Flex align="center" justify='center' py="4" mt='10' mb='10'>
                <Heading mr='10'>Type or copy paste GAID(s):</Heading>
                <Input size='lg' placeholder='10311343, 10311343' w='450px' />
                <Box p="3" px='4' ml='10' rounded='md' bg='white' shadow='xl' cursor='pointer'>
                    <SearchIcon w='6' h='6' />
                </Box>
            </Flex>

            <Box boxShadow='xl' p='6' rounded='md' bg='white' mb='8' w='80%'>
                <Flex align="center" mb='4'>
                    <Text fontSize='lg' mr='4'>Results from</Text>
                    <Heading  fontSize='lg'>Test Table</Heading>
                    <Text fontSize='lg' ml='4'> files</Text>
                </Flex>

                <Box overflowX='scroll' pb='8'>
                    <table >
                        <tr>
                            {data.map((item) => {

                                return (
                                    <th key={item.id}> <Box key={item.id} bg={color} mr='-1' px='6' textAlign='left' py='2'><Text  key={item.id}  color='gray.700' fontSize='md'>{item.title}</Text> </Box></th>
                                )
                            })}
                        </tr>

                        <tr>
                            {data.map((item) => {
                                return (
                                    <td key={item.id}> <Box key={item.id} w={{ base: item.value.length >= 100 ? '300px' : '100px', md: item.value.length >= 100 ? '500px' : '100px' }} ml='6' textAlign='justify' mr='-1'><Text  key={item.id} >{item.value}</Text></Box> </td>
                                )
                            })}

                        </tr>

                    </table>
                </Box>
            </Box>


            <Box boxShadow='xl' p='6' rounded='lg' bg='white' mb='8' w='80%'>
                <Flex align="center" mb='4'>
                    <Text fontSize='lg' mr='4'>Results from</Text>
                    <Heading  fontSize='lg'>_VEH_</Heading>
                    <Text fontSize='lg' ml='4'> files</Text>
                </Flex>

                <Box overflowX='scroll' pb='8'>
                    <table >
                        <tr>
                            {_VEH_.map((item) => {

                                return (
                                    <th key={item.id}> <Box key={item.id} w={{ }} bg={color} mr='-1' px='6' textAlign='left' py='2'><Text  key={item.id}  color='gray.700' fontSize='md'>{item.title}</Text> </Box></th>
                                )
                            })}
                        </tr>
                        {/* w={{ base: item.value1.length >= 100 ? '300px' : null, md: item.value1.length >= 100 ? '500px' : null }} ml='6' align='justify' mr='-1' justify='fexl - start' */}
                        <tr>
                            {_VEH_.map((item) => {
                                return (
                                    <td key={item.id}> <Box key={item.id}><Text  key={item.id} >{item.value1}</Text></Box> </td>
                                )
                            })}

                        </tr>
                        <tr>
                            {_VEH_.map((item) => {
                                return (
                                    <td key={item.id}> <Box key={item.id}><Text  key={item.id} >{item.value2}</Text></Box> </td>
                                )
                            })}

                        </tr>

                    </table>
                </Box>
            </Box>



        </>
    )
}

export default InstallationFine