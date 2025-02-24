import { Box, Grid2 } from '@mui/material'
import React, { useEffect } from 'react'
import Play from '../assets/Play.svg'

function PricingCard(props) {

    useEffect(() => {
        console.log("props", props)
    }, [])

    return (
        <Box className="pricing-card-container">
            <Grid2 container className="price-cards">
                    <img src={Play} alt="Logo1" />
                    <div className='plan-text'>{props.data.name}</div>
                <Grid2 className='div-center'>
                    <div className='plan-text-price'>${props.data.price}</div>
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
                    props.data.plan_details.map((e,i) => {
                        return(
                        <div key={i} className='plan-text-detail'>
                            <img src={Play} alt="Logo1" />
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

export default PricingCard