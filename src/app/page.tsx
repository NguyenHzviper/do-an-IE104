'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Navbar from './components/Navbar';
import Image from 'next/image';
import anhbia from '../../image/hero main component.png'
import danhgia from '../../image/Group 17.png'
import Stack from '@mui/material/Stack';
import { Button, Typography, IconButton } from '@mui/material';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import Process from './components/Process';
import AboutUs from './components/AboutUs';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import MyCarousel from './components/MyCarousel';


export default function HomePage() {
  return (
    <Box sx={{ backgroundColor: '#ECF9FF' }}>
      <Box sx={{ my: 1 }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={10}
          sx={{ mr: 5, ml: 30 }}
        >
          <Stack
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            spacing={4}
          >
            <Typography variant='h3'>Perfect place for yout bussiness promotion</Typography>
            <Typography variant='body1'>Businesses generally promote their brand, products, and services by identifying audience.</Typography>
            <Box>

              <Button variant='contained' sx={{ color: 'white', px: '30px', py: '20px', backgroundColor: '#060640' }}>Get started</Button>
              <IconButton sx={{ mx: 5, backgroundColor: "white" }} aria-label="play" size="large">
                <PlayArrowRoundedIcon fontSize="inherit" />
              </IconButton>
            </Box>
          </Stack>
          <Image src={anhbia} alt='Ảnh bìa' width={670}
            height={530}></Image>
        </Stack>
      </Box>
      <Process></Process>
      <AboutUs></AboutUs>
      <MyCarousel></MyCarousel>
    </Box>
  );
}