import { Box, Grid2 } from '@mui/material'
import React from 'react'
import CommonHeaderContent from '../components/CommonHeaderContent'
import Sponsers from '../widgets/homeComponents/Sponsers'
import NewsLetter from '../widgets/homeComponents/NewsLetter'
import Category from '../widgets/details/Category'
import PopularPosts from '../widgets/details/PopularPosts'
import PopularTags from '../widgets/details/PopularTags'
import ServiceImage from '../assets/ServiceMainImage.svg'

function BlogDetails() {
    return (
        <Box className='width-100'>
            <CommonHeaderContent data={{ linkName: 'Home /  Blog Details', name: 'Blog Details', description: 'Powerful project management tools for your companies of all sizes.' }} />
            <Grid2 container columnSpacing={2}>
                <Grid2 size={{ xs: 12, md: 9, lg: 9, xl: 9 }}>
                    <Grid2 container >
                        <img src={ServiceImage} alt="Logo" style={{ width: '100%', height: '100%' }} />
                    </Grid2>
                    <Grid2 container>
                        <Grid2 sx={{ py: 5 }}>
                            <div className='service-detail-heading'>1. Design functional website fast</div>
                            <div className='service-detail-description'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</div>
                        </Grid2>
                        <Grid2 sx={{ py: 5 }}>
                            <div className='service-detail-description'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</div>
                        </Grid2>
                        <Grid2 sx={{ py: 5 }}>
                            <div className='service-detail-description'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</div>
                        </Grid2>
                    </Grid2>
                </Grid2>
                <Grid2 size={{ xs: 12, md: 3, lg: 3, xl: 3 }}>
                    <Category />
                    <PopularPosts />
                    <PopularTags />
                </Grid2>
            </Grid2>
            <Sponsers />
            <NewsLetter />
        </Box>
    )
}

export default BlogDetails