import React from "react";
import { Card, CardContent, Typography, Avatar, Box, Grid2 } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import PinkCard from '../../assets/PinkCard.svg'
import BlueCard from '../../assets/BlueCard.svg'
import YellowCard from '../../assets/YellowCard.svg'

const OurClients = () => {
    return (
        <Grid2 container>
            <Grid2 item size={{ xs: 12, sm: 12, md: 4, lg: 4, xl: 4 }}>
                <Box
                    width={'100%'}
                    maxHeight={'490px'}
                    position="relative"
                    className='div-center'
                >
                    <img src={PinkCard} alt="Logo1" style={{ width: '100%', height: '100%' }} />
                    <Box className='div-center' width={'100%'} top={16} position="absolute">
                        <Card sx={{ position: "relative", textAlign: "center", p: 3, width: 250, background: 'transparent', boxShadow: 'none' }}>
                            <Avatar
                                src="https://via.placeholder.com/100"
                                alt="Profile"
                                sx={{ width: '119px', height: '119px', mx: "auto", mt: -2, border: "4px solid white" }}
                            />
                            <CardContent>
                                <Typography variant="h6" fontWeight="bold">Kapil Nagar</Typography>
                                <Typography variant="body2" color="textSecondary">Product Designer</Typography>
                                <Box display="flex" justifyContent="center" mt={1}>
                                    {[...Array(5)].map((_, i) => (
                                        <StarIcon key={i} sx={{ color: "#7B61FF" }} />
                                    ))}
                                </Box>
                                <Typography variant="body2" color="textSecondary" mt={2}>
                                    But I must explain to you how all this mistaken idea of denouncing
                                    pleasure and praising pain was bor...
                                </Typography>
                            </CardContent>
                        </Card>
                    </Box>
                </Box>
            </Grid2>
            <Grid2 item size={{ xs: 12, sm: 12, md: 4, lg: 4, xl: 4 }}>
                <Box
                    width={'100%'}
                    maxHeight={'490px'}
                    position="relative"
                    className='div-center'
                >
                    <img src={BlueCard} alt="Logo1" style={{ width: '100%', height: '100%' }} />
                    <Box className='div-center' width={'100%'} top={16} position="absolute">
                        <Card sx={{ position: "relative", textAlign: "center", p: 3, width: 250, background: 'transparent', boxShadow: 'none' }}>
                            <Avatar
                                src="https://via.placeholder.com/100"
                                alt="Profile"
                                sx={{ width: '119px', height: '119px', mx: "auto", mt: -2, border: "4px solid white" }}
                            />
                            <CardContent>
                                <Typography variant="h6" fontWeight="bold">Kapil Nagar</Typography>
                                <Typography variant="body2" color="textSecondary">Product Designer</Typography>
                                <Box display="flex" justifyContent="center" mt={1}>
                                    {[...Array(5)].map((_, i) => (
                                        <StarIcon key={i} sx={{ color: "#7B61FF" }} />
                                    ))}
                                </Box>
                                <Typography variant="body2" color="textSecondary" mt={2}>
                                    But I must explain to you how all this mistaken idea of denouncing
                                    pleasure and praising pain was bor...
                                </Typography>
                            </CardContent>
                        </Card>
                    </Box>
                </Box>
            </Grid2>
            <Grid2 item size={{ xs: 12, sm: 12, md: 4, lg: 4, xl: 4 }}>
                <Box
                    width={'100%'}
                    maxHeight={'490px'}
                    position="relative"
                    className='div-center'
                >
                    <img src={YellowCard} alt="Logo1" style={{ width: '100%', height: '100%' }} />
                    <Box className='div-center' width={'100%'} top={16} position="absolute">
                        <Card sx={{ position: "relative", textAlign: "center", p: 3, width: 250, background: 'transparent', boxShadow: 'none' }}>
                            <Avatar
                                src="https://via.placeholder.com/100"
                                alt="Profile"
                                sx={{ width: '119px', height: '119px', mx: "auto", mt: -2, border: "4px solid white" }}
                            />
                            <CardContent>
                                <Typography variant="h6" fontWeight="bold">Kapil Nagar</Typography>
                                <Typography variant="body2" color="textSecondary">Product Designer</Typography>
                                <Box display="flex" justifyContent="center" mt={1}>
                                    {[...Array(5)].map((_, i) => (
                                        <StarIcon key={i} sx={{ color: "#7B61FF" }} />
                                    ))}
                                </Box>
                                <Typography variant="body2" color="textSecondary" mt={2}>
                                    But I must explain to you how all this mistaken idea of denouncing
                                    pleasure and praising pain was bor...
                                </Typography>
                            </CardContent>
                        </Card>
                    </Box>
                </Box>
            </Grid2>
        </Grid2>
    );
};

export default OurClients;
