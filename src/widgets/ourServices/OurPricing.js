import { Box, Grid2 } from '@mui/material'
import React from 'react'
import PricingCard from '../../components/PricingCard';

const pages = [
    {
        name: 'Basic Plan',
        price: '59',
        plan_details:
            [
                '30h Fast generations',
                'Unlimited Relaxed generations',
                'General commercial terms',
                'Access to member gallery',
                'Optional credit top ups',
                '3 concurrent fast jobs'
            ]
    },
    {
        name: 'Standard Plan',
        price: '59',
        plan_details:
            [
                '30h Fast generations',
                'Unlimited Relaxed generations',
                'General commercial terms',
                'Access to member gallery',
                'Optional credit top ups',
                '3 concurrent fast jobs'
            ]
    },
    {
        name: 'Premium',
        price: '59',
        plan_details:
            [
                '30h Fast generations',
                'Unlimited Relaxed generations',
                'General commercial terms',
                'Access to member gallery',
                'Optional credit top ups',
                '3 concurrent fast jobs'
            ]
    }
];

function OurPricing() {
    return (
        <Box className='div-center d-flex-col' sx={{ py: 8 }}>
            <Grid2 className='div-center'>
                <div className='method-heading'>
                    <span style={{ paddingRight: '10px' }} >Our</span>
                    <span style={{ position: 'relative' }}>
                        Pricing
                        <span style={{ background: '#FFDC60', height: '10px', width: '100%', display: 'flex', position: 'absolute', right: 0, bottom: '8px', zIndex: '-1' }}></span>
                    </span>
                    <span style={{ paddingRight: '10px' }} >Plan</span>
                </div>
            </Grid2>
            <div className='team-heading-side text-center'>
                But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete.
            </div>
            <Grid2 container className='div-center method-task-card-container' rowSpacing={2} columnSpacing={5}>
                {pages.map((e, i) => {
                    return (
                        <Grid2 item size={{ xs: 12, md: 4, lg: 4, xl: 4 }} className='div-center'>
                            <PricingCard key={i} data={e} />
                        </Grid2>
                    )
                })}
            </Grid2>
        </Box>
    )
}

export default OurPricing