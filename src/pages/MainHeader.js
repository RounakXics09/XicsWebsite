import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Logo from '../assets/logo.svg';


const pages = ['Home', 'About', 'Service', 'Blog', 'Contact'];

function MainHeader() {


    return (
        <AppBar position="static" className='header'>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <img src={Logo} alt="Logo" />

                    <Box className="div-center header-menu-section" sx={{ flexGrow: 1 }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                className='menu-buttons'
                                sx={{ my: 2 }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>

                    <Box className="header-right-section div-center">
                        <div className='signin'>
                            Sign In
                        </div>
                        <div className='signup div-center'>
                            Sign Up
                        </div>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar >
    );
}
export default MainHeader