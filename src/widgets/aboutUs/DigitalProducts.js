import { Box } from '@mui/material'
import React from 'react'
import AboutMain from '../../assets/AboutMain.svg'
import AboutSnake from '../../assets/AboutSnake.svg'
import AboutSnake1 from '../../assets/AboutSnake1.svg'

function DigitalProducts(props) {
    return (
        <Box>
            <div className='about-content-text-container'>
                <span className='main-content-text'>We Create Digital Products</span><br />
                <span className='main-content-text'>That Enhance The  </span>
                <span className='main-content-span'>User Experience</span>
            </div>

            <div className='width-100' style={{ paddingBlock: '50px' }}>
                <img src={AboutMain} alt="Logo1" style={{ width: '100%', height: '100%' }} />
            </div>

            <div className='div-between'>
                    <img src={AboutSnake} alt="Logo1" style={{width:'auto',height:'184px',marginLeft:'-55px'}} />
                <div className='about-description'>
                    <div>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                        doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                    </div>
                    <div style={{paddingTop:'30px'}}>
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore
                        magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
                        Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                    </div>
                </div>
                    <img src={AboutSnake1} alt="Logo1" style={{width:'auto',height:'184px',marginRight:'-55px'}} />
            </div>
        </Box>
    )
}

export default DigitalProducts
