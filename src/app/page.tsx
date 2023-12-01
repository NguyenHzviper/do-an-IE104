'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Navbar from './components/nav_bar';
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
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Stack from '@mui/material/Stack';
import { Button, Typography, IconButton, Paper, TextField, Grid } from '@mui/material';
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
import LoginDialog from './components/login_dialog';


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
              <Typography variant='h3'>Địa điểm hoàn hảo cho việc quảng bá kinh doanh của bạn</Typography>
              <Typography variant='body1'>Các doanh nghiệp thông thường quảng bá thương hiệu, sản phẩm và dịch vụ của họ bằng cách xác định đối tượng khách hàng.</Typography>
              <Box>

                <Button onClick={() => scrollToSection('start')} variant='contained' sx={{ color: 'white', px: '30px', py: '20px', backgroundColor: '#060640' }}>Bắt đầu</Button>
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
            <Typography variant='h3' sx={{ textAlign: 'center' }}>Quảng bá toàn cầu</Typography>
            <Typography variant='body2' sx={{ textAlign: 'center', pb: 3 }}>Doanh nghiệp thông thường quảng bá thương hiệu, sản phẩm và dịch vụ của họ bằng cách xác định đối tượng khách hàng. <br /> Không có gì ngạc nhiên khi chiến lược quảng bá là một trong những quy trình quan trọng nhất trong lĩnh vực tiếp thị.</Typography>
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
            <Typography variant='h3' sx={{ textAlign: 'start' }}>Đăng ký nhận bản tin</Typography>
            <Typography variant='body2' sx={{ textAlign: 'start', py: 1 }}>Đăng ký để nhận được thông báo và những ưu đãi mới nhất từ chúng tôi</Typography>
            <TextField id="outlined-basic" margin='normal' sx={{ width: '500px' }} label="Email" variant="outlined" />
            <Button variant='contained' sx={{ color: 'white', px: '20px', py: '16px', backgroundColor: '#060640', ml: 2, mt: 1.9 }}>Đăng ký</Button>

          </Box>
          <Image src={ongco} alt='Ảnh bìa' width={353}
            height={436} style={{ position: 'absolute', top: "0%", left: "60%" }} />
        </Paper>
        <Paper square sx={{ p: 10 }}>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <Typography variant='h3' sx={{ textAlign: 'start' }}>Nhóm 1</Typography>
              <Typography variant='body2' sx={{ textAlign: "start", my: 2 }}>Điều này là một vấn đề quan trọng và theo tôi, nó được xem là một trong những điều quan trọng nhất đối với một doanh nghiệp.</Typography>
              <IconButton>
                <FacebookIcon />
              </IconButton>
              <IconButton>
                <InstagramIcon />
              </IconButton>
              <IconButton>
                <TwitterIcon />
              </IconButton>
              <IconButton>
                <LinkedInIcon />
              </IconButton>
            </Grid>
            <Grid item xs={3}>
              <Typography variant='h5' sx={{ textAlign: 'start' }}>Liên kết nhanh</Typography>
              <Typography variant='body2' sx={{ textAlign: "start", my: 2 }}>Trang chủ</Typography>
              <Typography variant='body2' sx={{ textAlign: "start", my: 2 }}>Giới thiệu</Typography>
              <Typography variant='body2' sx={{ textAlign: "start", my: 2 }}>Lịch hẹn</Typography>
              <Typography variant='body2' sx={{ textAlign: "start", my: 2 }}>Blog</Typography>
              <Typography variant='body2' sx={{ textAlign: "start", my: 2 }}>Liên hệ</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant='h5' sx={{ textAlign: 'start' }}>Công ty</Typography>
              <Typography variant='body2' sx={{ textAlign: "start", my: 2 }}>Giới thiệu công ty</Typography>
              <Typography variant='body2' sx={{ textAlign: "start", my: 2 }}>Liên hệ</Typography>
              <Typography variant='body2' sx={{ textAlign: "start", my: 2 }}>Công việc</Typography>
              <Typography variant='body2' sx={{ textAlign: "start", my: 2 }}>Báo chí</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant='h5' sx={{ textAlign: 'start' }}>Thông tin</Typography>
              <Typography variant='body2' sx={{ textAlign: "start", my: 2 }}>Chính sách bảo mật</Typography>
              <Typography variant='body2' sx={{ textAlign: "start", my: 2 }}>Điều khoản và Điều kiện</Typography>
              <Typography variant='body2' sx={{ textAlign: "start", my: 2 }}>Câu hỏi thường gặp (FAQ)</Typography>
            </Grid>
          </Grid>
        </Paper>
        <Box sx={{ backgroundColor: "#000020", py: 2, px: 10 }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
          >
            <Typography variant='body2' sx={{ color: 'white' }}>© 2023 AdVista. All rights reserved.</Typography>
            <Typography variant='body2' sx={{ color: 'white' }}>Thiết kế bởi AdVista</Typography>
          </Stack>

        </Box>
        <IconButton onClick={scrollToTop} id='scrollToTopBtn' size='large' sx={{ backgroundColor: "green", position: "fixed", top: "80%", left: "93%", display: visible ? '' : 'none' }} aria-label="scroll to top">
          <ArrowUpwardIcon />
        </IconButton>
      </Box>

    </ThemeProvider>
  );
}