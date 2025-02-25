import { Box } from '@mui/material'
import React from 'react'
import CommonHeaderContent from '../components/CommonHeaderContent'

function ServiceDetails() {
    return (
        <Box className='width-100'>
            <CommonHeaderContent data={{ linkName: 'Home /  Services Details', name: 'Services Details', description: 'Powerful project management tools for your companies of all sizes.' }} />
        </Box>
    )
}

export default ServiceDetails