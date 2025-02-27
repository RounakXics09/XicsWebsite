import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Box, Grid2 } from '@mui/material';

export default function Faq() {
    return (
        <Box className='div-center' sx={{py:5}}>
            <Grid2 container columnSpacing={5} rowSpacing={2}>
                <Grid2 size={{ xs: 12,sm:12, md: 12, lg: 12, xl: 12 }} className="faq-headings">Frequently Answer & Questions</Grid2>
                <Grid2 size={{ xs: 12,sm:12, md: 12, lg: 12, xl: 12 }}>
                    <Accordion>
                        <AccordionSummary
                            // expandIcon={<ArrowDropDownIcon />}

                            aria-controls="panel2-content"
                            id="panel2-header"
                        >
                            <Typography component="span">How to know status of a campaign?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Powerful project management tools for your companies of all sizes.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Grid2>
                <Grid2 size={{ xs: 12,sm:12, md: 12, lg: 12, xl: 12 }}>
                    <Accordion>
                        <AccordionSummary
                            // expandIcon={<ArrowDropDownIcon />}

                            aria-controls="panel2-content"
                            id="panel2-header"
                        >
                            <Typography component="span">How to know status of a campaign?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Powerful project management tools for your companies of all sizes.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Grid2>
                <Grid2 size={{ xs: 12,sm:12, md: 12, lg: 12, xl: 12 }}>
                    <Accordion>
                        <AccordionSummary
                            // expandIcon={<ArrowDropDownIcon />}

                            aria-controls="panel2-content"
                            id="panel2-header"
                        >
                            <Typography component="span">How to know status of a campaign?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Powerful project management tools for your companies of all sizes.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Grid2>
            </Grid2>
        </Box>
    );
}
