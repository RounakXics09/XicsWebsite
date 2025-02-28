import { Grid2 } from '@mui/material'
import React from 'react'
import BlogImage from '../assets/BlogImage.svg'

function BlogCard() {
  return (
    <Grid2>
      <Grid2>
        <div style={{ position: 'relative' }}>
          <img src={BlogImage} alt="Logo1" style={{ width: '100%' }} />
          <div style={{ position: 'absolute',top:'20px',left:'20px' }}>
            <div className='blog-date'>13 <br /><span className='text-span'>Feb</span></div>
          </div>
        </div>
      </Grid2>
      <Grid2 sx={{ py: 2 }} className="blog-card-heading">
        What Makes droit addons for
        Elementor a good choose.
      </Grid2>
      <Grid2 className="blog-card-description">
        It is a long established fact that a reader will be distracted by the readable.
      </Grid2>
      <Grid2 sx={{ py: 2 }} className="div-between" >
        <div className='readmore'>
          Read More
        </div>
        <div className='no-comments'>
          No Comments
        </div>
      </Grid2>
    </Grid2>
  )
}

export default BlogCard