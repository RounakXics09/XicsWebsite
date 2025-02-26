import { Box } from '@mui/material'
import React from 'react'
import CommonHeaderContent from '../components/CommonHeaderContent'
import Sponsers from '../widgets/homeComponents/Sponsers'
import NewsLetter from '../widgets/homeComponents/NewsLetter'

function BlogDetails() {
    return (
        <Box className='width-100'>
            <CommonHeaderContent data={{ linkName: 'Home /  Blog Details', name: 'Blog Details', description: 'Powerful project management tools for your companies of all sizes.' }} />
            <Sponsers />
            <NewsLetter />
        </Box>
    )
}

export default BlogDetails