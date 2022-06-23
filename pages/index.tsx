import { Box } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import SearchPage from './SearchPage'

const Home: NextPage = () => {
  return (
    <Box p='10'>
      <SearchPage />
    </Box>
  )
}

export default Home
