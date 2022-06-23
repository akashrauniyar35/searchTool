import { Button, Flex, Heading, Input, Text, IconButton, Box, Tabs, TabList, Tab, TabPanel, TabPanels, } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import React from 'react'
import InstallationFine from '../src/components/InstallationFile'
import Reports from './Reports'
import Search from './Table'





function SearchPage() {






    return (
        <>
            <Box>
                <Box  >
                    <Tabs variant='unstyled' align='center'>
                        <TabList>
                            <Tab _selected={{ color: 'white', bg: 'green.400', rounded: 'lg', w: '40', shadow: 'inner', }}><Text fontSize='25' fontWeight='medium'>Search</Text></Tab>
                            <Tab _selected={{ color: 'white', bg: 'green.400', rounded: 'lg', w: '40', shadow: 'inner', }}>Reports</Tab>
                            <Tab _selected={{ color: 'white', bg: 'green.400', rounded: 'lg', w: '60', shadow: 'inner', }}>LP Installation Files</Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel>
                                <Search />
                            </TabPanel>
                            <TabPanel>
                                <Reports />
                            </TabPanel>
                            <TabPanel>
                                <InstallationFine />
                            </TabPanel>
                            <TabPanel>
                                <Reports />
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </Box>

            </Box>



        </>
    )
}

export default SearchPage