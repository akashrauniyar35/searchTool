import { Box, Button, Collapse, Flex, Heading, Image, Select, Text, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import pdf from '../assets/pdf.png'

function Reports() {
    const [report, setReport] = useState<string>();
    const [isOpen, setIsOpen] = useState(false)
    // const { isOpen, onToggle } = useDisclosure()

    const allReports = [
        {
            id: '00',
            title: 'All Contacts'
        },
        {
            id: '01',
            title: 'All Drivers'
        },
        {
            id: '02',
            title: 'All Reports'
        },
        {
            id: '03',
            title: 'All Reports Custom'
        },
        {
            id: '04',
            title: 'All Users'
        },
        {
            id: '05',
            title: 'All Vehicles'
        },
        {
            id: '06',
            title: 'installs Mtd'
        },
        {
            id: '07',
            title: 'Installs Ytd'
        },
        {
            id: '08',
            title: 'LeasePlan Bill'
        },
        {
            id: '09',
            title: 'LPP Orders ETA Mtd'
        },
        {
            id: '10',
            title: 'LPP Orders Ytd'
        },
        {
            id: '11',
            title: 'Non Reporting Units'
        },
        {
            id: '12',
            title: 'Unlock User Accounts'
        },
    ]

    const onToggle = () => {
        setIsOpen(!isOpen);
    }

    function selectReport(title: string) {
        setReport(title),
            setIsOpen(!isOpen);
    }

    return (
        <>
            <Box bg='gray.100' w='1000px' px='5' py='10' shadow='2xl' rounded='lg'>

                <Heading textAlign='left' >Run Reports</Heading>

                <Flex align="center" justify="left" py='4'>

                    <Flex w={{ base: '200px', lg: '600px' }} bg='gray.200' px='6' py='1.5' rounded='md' cursor='pointer' onClick={onToggle}><Text fontSize='xl' color='gray.700' fontWeight='medium'>{report == null ? 'Select Report' : report}</Text></Flex>

                    <Button colorScheme='teal' size='md' ml='4' w='400px'>
                        Run Report
                    </Button>

                </Flex>

                <Box boxShadow='2xl' rounded='md' bg='gray.100' w={{ base: '100%', lg: '100%' }}>
                    <Collapse in={isOpen} animateOpacity>
                        <Box
                            p='40px'
                            color='white'
                            rounded='md'
                            shadow='md'
                        >
                            <Flex flexDirection='row' flexWrap='wrap'>
                                {allReports.map((item) => {
                                    return (
                                        <Button onClick={() => selectReport(item.title)} bg='white' mr='5' mb='5' px='10'><Text color='gray.700'>{item.title}</Text></Button>
                                    )
                                })}
                            </Flex>
                        </Box>
                    </Collapse>

                </Box>
            </Box>

            <Box w='1000px'>
                {report == null ? null :

                    <Flex mt='4' justify='left'>

                        <Flex flexDirection='row' align='center' boxShadow='xl' rounded='md' bg='red.400' p='2' px='4'>
                            <Text fontSize='xl' fontWeight='bold' mr='4' color='white'>Export to PDF</Text>
                        </Flex>

                        <Flex flexDirection='row' align='center' boxShadow='xl' rounded='md' bg='green.400' p='2' px='4' ml='6'>
                            <Text fontSize='xl' fontWeight='bold' mr='4' color='white'>Export to Excel</Text>
                        </Flex>

                    </Flex>}
            </Box>


        </>
    )
}

export default Reports