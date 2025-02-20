import React from 'react'
import MainHeader from './MainHeader'
import Home from './Home'
import MainFooter from './MainFooter'
import { Box } from '@mui/material'

function MainLayout() {
    return (
        <Box>
            <MainHeader />
            <div style={{paddingBlock:'50px'}}>
            <Home />
            </div>
            <MainFooter />
        </Box>

    )
}

export default MainLayout