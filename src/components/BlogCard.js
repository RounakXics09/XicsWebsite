import { Grid2 } from '@mui/material'
import React from 'react'
import BlogImage from '../assets/BlogImage.svg'

function BlogCard() {
  return (
    <Grid2>
      <Grid2>
        <img src={BlogImage} alt="Logo1" style={{width:'100%'}} />
      </Grid2>
      <Grid2 sx={{py:2}} className="blog-card-heading">
        What Makes droit addons for
        Elementor a good choose.
      </Grid2>
      <Grid2 className="blog-card-description">
        It is a long established fact that a reader will be distracted by the readable.
      </Grid2>
      <Grid2 sx={{py:2}} className="div-between" >
        <div>
          Read More
        </div>
        <div>
          no comments
        </div>
      </Grid2>
    </Grid2>
  )
}

export default BlogCard