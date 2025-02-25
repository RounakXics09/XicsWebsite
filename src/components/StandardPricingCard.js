import { Box, Grid2 } from '@mui/material'
import React, { useEffect } from 'react'
import Play from '../assets/Star.svg'
import Check from '../assets/Check.svg'

const lists =
    [
        '30h Fast generations',
        'Unlimited Relaxed generations',
        'General commercial terms',
        'Access to member gallery',
        'Optional credit top ups',
        '3 concurrent fast jobs'
    ]

function StandardPricingCard() {

    return (
        <Box className="pricing-card-container">
            <Grid2 container className="price-cards">
            <img src={Play} alt="Logo" />
                    <div className='plan-text'>Standard Plan</div>
                <Grid2 className='div-center'>
                    <div className='plan-text-price'>$99</div>
                    <div className='plan-text-duration'>/month</div>
                </Grid2>
                <Grid2>
                    <div className='plan-text-desc'>
                        per editor/month
                        <br />
                        billed monthly
                    </div>
                </Grid2>
                <Grid2>
                    {
                    lists.map((e,i) => {
                        return(
                        <div key={i} className='plan-text-detail'>
                            <img src={Check} alt="Logo1" />
                            <div>{e}</div>
                        </div>
                        )
                    })
                    }
                </Grid2>
                <Grid2>
                    Get Started
                </Grid2>
            </Grid2>
        </Box>
    )
}

export default StandardPricingCard