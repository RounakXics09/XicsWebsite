import { Box, Grid2 } from '@mui/material'
import React from 'react'
import Play from '../../assets/Play.svg'
import About from '../../assets/aboutimage.svg'
import About1 from '../../assets/aboutimage1.svg'
import About2 from '../../assets/aboutimage2.svg'

function PerfectSolution() {
    return (
        <Box sx={{py:8}}>
            <Grid2 container>
                <Grid2 item size={{ xs: 12, md: 5, lg: 5, xl: 5 }}>
                    <div className='method-heading'>
                        <span style={{ paddingRight: '10px' }}>Perfect</span>
                        <span style={{ position: 'relative' }}>
                            Solution
                            <span style={{ background: '#FFDC60', height: '10px', width: '100%', display: 'flex', position: 'absolute', right: 0, bottom: '8px', zIndex: '-1' }}></span>
                        </span>
                    </div>
                    <div className='method-heading-side'>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                    </div>

                    <div className='method-btn-container'>
                        <div className='btn-free'>
                            Get started for free
                        </div>
                        <div className='btn-play'>
                            <img src={Play} alt="Logo1" />
                            <span style={{ paddingLeft: '10px' }}>Play video</span>
                        </div>
                    </div>
                </Grid2>
                <Grid2 item size={{ xs: 12, md: 7, lg: 7, xl: 7 }}>
                    <Grid2 container columnSpacing={2}>
                        <Grid2 item size={{ xs: 12, md: 7, lg: 7, xl: 7 }}>
                            <Grid2 container rowSpacing={2}>
                                <Grid2 item size={{ xs: 12, md: 12, lg: 12, xl: 12 }}>
                                    <img src={About} alt="Logo1" style={{width:'100%',height:'100%'}} />
                                </Grid2>
                                <Grid2 item size={{ xs: 12, md: 12, lg: 12, xl: 12 }}>
                                    <img src={About1} alt="Logo1" style={{width:'100%',height:'100%'}} />
                                </Grid2>
                            </Grid2>
                        </Grid2>
                        <Grid2 item size={{ xs: 12, md: 5, lg: 5, xl: 5 }} style={{display:'flex'}}>
                            <img src={About2} alt="Logo1" />
                        </Grid2>
                    </Grid2>
                </Grid2>
            </Grid2>
        </Box>
    )
}

export default PerfectSolution