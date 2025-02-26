import { Box, Grid2 } from '@mui/material'
import React, { useEffect } from 'react'
import CommonCard from '../../components/CommonCard'

function OurTeam(props) {

  useEffect(() => {
    console.log("props", props);
  }, [])


  return (
    <Box className="div-center p-20 d-flex-col">
      <Grid2 className='div-center'>
        <div className='method-heading'>
          <span style={{ paddingRight: '10px' }} >Meet Our</span>
          <span style={{ position: 'relative' }}>
            Team
            <span style={{ background: '#FFDC60', height: '10px', width: '100%', display: 'flex', position: 'absolute', right: 0, bottom: '8px', zIndex: '-1' }}></span>
          </span>
        </div>
      </Grid2>
      <div className='team-heading-side text-center'>
        But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete.
      </div>

      <Grid2 container columnSpacing={5} rowSpacing={5} sx={{ py: 5 }}>
        {
          props.data.pages1.map((e, i) => {
            return (
              <Grid2 key={i} item size={{ xs: 12,sm:12, md: 4, lg: 4, xl: 4 }}>
                <CommonCard data={{ ...e }} />
              </Grid2>
            )
          })
        }
      </Grid2>
    </Box>
  )
}

export default OurTeam