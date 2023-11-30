'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Navbar from './components/Navbar';
import Image from 'next/image';
import anhbia from '../../image/hero main component.png'
import messpic from '../../image/message.png'
import globalpic from '../../image/global promotion/global promotion 2.png'
import vec31 from '../../image/global promotion/Group 31.png'
import vec8 from '../../image/global promotion/Vector 8.png'
import vec7 from '../../image/global promotion/Vector 7.png'
import vec6 from '../../image/global promotion/Vector 6.png'
import vec32 from '../../image/global promotion/Group 32.png'
import mespic from '../../image/global promotion/mespic.png'
import ongco from '../../image/ông cố ơi.png'
import Stack from '@mui/material/Stack';
import { Button, Typography, IconButton, Paper, TextField } from '@mui/material';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import Process from './components/Process';
import AboutUs from './components/AboutUs';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import MyCarousel from './components/MyCarousel';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { selectTheme } from '@/app/redux/themeSlice';
import { useSelector } from 'react-redux';
import { lightModeTheme, darkModeTheme } from './components/ThemeRegistry/theme';


export default function HomePage() {
  const [visible, setVisible] = useState(false)

  function scrollToSection(id: string) {
    var section = document.getElementById(id.toLocaleLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true)
    }
    else if (scrolled <= 300) {
      setVisible(false)
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'

    });
  };

  if (typeof window !== "undefined") {
    window.addEventListener('scroll', toggleVisible);
  }

  const isDark = useSelector(selectTheme)

  return (
    <ThemeProvider theme={isDark ? darkModeTheme : lightModeTheme}>
      <Navbar></Navbar>
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

                <Button onClick={() => scrollToSection('start')} variant='contained' sx={{ color: 'white', px: '30px', py: '20px', backgroundColor: '#060640' }}>Get started</Button>
                <IconButton sx={{ mx: 5, backgroundColor: "#00E5CC" }} aria-label="play" size="large">
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
        <Paper square sx={{ p: 10 }}>

          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <Typography variant='h3' sx={{ textAlign: 'center' }}>Global  promotion</Typography>
            <Typography variant='body2' sx={{ textAlign: 'center', pb: 3 }}>Businesses generally promote their brand, products, and services by identifying audience. No wonder <br></br> that promotion strategy is one of the most important processes in marketing.</Typography>
            <Box sx={{ position: "relative" }}>
              <Image src={globalpic} alt='Ảnh bìa' width={1000}
                height={500} />
              <Image src={messpic} alt='Ảnh bìa' style={{ position: 'absolute', top: "45%", left: "45%" }} />
              <Image src={vec31} alt='Ảnh bìa' style={{ position: 'absolute', top: "20%", left: "50%" }} />
              <Image src={vec8} alt='Ảnh bìa' style={{ position: 'absolute', top: "57%", left: "51%" }} />
              <Image src={vec7} alt='Ảnh bìa' style={{ position: 'absolute', top: "63%", left: "45%" }} />
              <Image src={vec6} alt='Ảnh bìa' style={{ position: 'absolute', top: "55%", left: "17%" }} />
              <Image src={vec32} alt='Ảnh bìa' style={{ position: 'absolute', top: "21%", left: "30%" }} />
              <Image src={mespic} alt='Ảnh bìa' style={{ position: 'absolute', top: "5%", left: "63%" }} />
              <Image src={mespic} alt='Ảnh bìa' style={{ position: 'absolute', top: "53%", left: "66%" }} />
              <Image src={mespic} alt='Ảnh bìa' style={{ position: 'absolute', top: "90%", left: "36%" }} />
              <Image src={mespic} alt='Ảnh bìa' style={{ position: 'absolute', top: "30%", left: "0%" }} />
              <Image src={mespic} alt='Ảnh bìa' style={{ position: 'absolute', top: "0%", left: "15%" }} />
            </Box>

          </Stack>
        </Paper>
        <Paper square sx={{ p: 10, position: 'relative' }}>

          <Box sx={{ backgroundColor: "#ECFDFF", p: 10, }}>
            <Typography variant='h3' sx={{ textAlign: 'start' }}>Subscribe newsletter</Typography>
            <Typography variant='body2' sx={{ textAlign: 'start', py: 1 }}>Businesses generally promote their brand, products, and services by identifying audience.<br></br> No wonder that promotion strategy is one of the most important processes in marketing.</Typography>
            <TextField id="outlined-basic" margin='normal' sx={{ width: '500px' }} label="Enter email address" variant="outlined" />
            <Button variant='contained' sx={{ color: 'white', px: '20px', py: '16px', backgroundColor: '#060640', ml: 2, mt: 1.9 }}>Subscribe</Button>

          </Box>
          <Image src={ongco} alt='Ảnh bìa' width={353}
            height={436} style={{ position: 'absolute', top: "0%", left: "60%" }} />
        </Paper>

        <IconButton onClick={scrollToTop} id='scrollToTopBtn' size='large' sx={{ backgroundColor: "green", position: "fixed", top: "80%", left: "93%", display: visible ? '' : 'none' }} aria-label="scroll to top">
          <ArrowUpwardIcon />
        </IconButton>
      </Box>
    </ThemeProvider>
  );
}