import { Box } from '@mui/material'
import React from 'react'
import MainContent from '../widgets/homeComponents/MainContent'
import Sponsers from '../widgets/homeComponents/Sponsers'
import BestMethod from '../widgets/homeComponents/BestMethod'
import LatestWork from '../widgets/homeComponents/LatestWork'
import OurTeam from '../widgets/homeComponents/OurTeam'
import ClientReview from '../widgets/homeComponents/ClientReview'
import NewsLetter from '../widgets/homeComponents/NewsLetter'

function Home() {
  return (
    <Box className='width-100'>
      <MainContent />
      <Sponsers />
      <BestMethod />
      {/* <LatestWork /> */}
      {/* <OurTeam /> */}
      {/* <ClientReview /> */}
      <NewsLetter />
    </Box>
  )
}

export default Home