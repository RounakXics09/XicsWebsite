import { Box, Grid2 } from '@mui/material'
import React from 'react'

function PopularTags() {
    return (
        <Box>
            <Grid2 className='sidebar-headings'>
                Popular Tags
            </Grid2>
            <Grid2>
                {
                    [1, 2, 3, 4, 5].map((e) => {
                        <div>{e}</div>
                    })
                }
            </Grid2>
        </Box>
    )
}

export default PopularTags