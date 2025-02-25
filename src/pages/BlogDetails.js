import { Box } from '@mui/material'
import React from 'react'
import CommonHeaderContent from '../components/CommonHeaderContent'

function BlogDetails() {
    return (
        <Box className='width-100'>
            <CommonHeaderContent data={{ linkName: 'Home /  Blog Details', name: 'Blog Details', description: 'Powerful project management tools for your companies of all sizes.' }} />
        </Box>
    )
}

export default BlogDetails