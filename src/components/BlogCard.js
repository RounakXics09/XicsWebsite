import { Grid2 } from '@mui/material'
import React from 'react'
import Play from '../assets/Play.svg'

function BlogCard() {
  return (
    <Grid2>
      <Grid2>
        <img src={Play} alt="Logo1" />
      </Grid2>
      <Grid2>
        What Makes droit addons for
        Elementor a good choose.
      </Grid2>
      <Grid2>
        It is a long established fact that a reader will be distracted by the readable.
      </Grid2>
      <Grid2>
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