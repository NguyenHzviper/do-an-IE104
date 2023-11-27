'use client'
import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import { Container } from '@mui/material';
type Props = {}
const pages = ['Home', 'About', 'Services', 'Reviews', 'Support'];

const Navbar = (props: Props) => {

    function scrollToSection(id: string) {
        var section = document.getElementById(id.toLocaleLowerCase());
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }


    return (
        <AppBar position='static' color='default' sx={{ py: 2, color: 'white' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
                    <Typography variant='h5' sx={{ ml: 2, textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', color: '#060640', fontWeight: 'bold' }}>
                        <span style={{ color: '#00E5CC' }}>R</span>yan
                    </Typography>
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={() => scrollToSection(page)}
                                sx={{ px: '12.5px', color: page === 'Home' ? '#00E5CC' : '#828297', display: 'block', fontSize: '14px' }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>
                    <Box>
                        <Button sx={{ color: 'black', mx: '25px' }}>Sign in</Button>
                        <Button variant='contained' sx={{ color: 'white', px: '30px', py: '20px', backgroundColor: '#060640' }}>Free trail</Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Navbar