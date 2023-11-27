import React from 'react'
import Grid from '@mui/material/Unstable_Grid2';
import { Stack, Typography, Box } from '@mui/material';
import Image, { StaticImageData } from 'next/image';
import pic from '../../../image/image 56.png'
import shieldicon from '../../../image/shield 1.svg'
import ratingicon from '../../../image/rating 1.svg'
import group13 from '../../../image/Group 13.svg'
type Props = {}

const AboutUs = (props: Props) => {
    return (
        <Box id="about" sx={{ backgroundColor: 'white', p: 10, position: 'relative' }}>
            <Grid container spacing={4}>
                <Grid xs={12} md={6}>
                    <Typography variant='h3' gutterBottom sx={{}}>About us</Typography>
                    <Typography variant='body2' sx={{ pb: 3 }}>No wonder that promotion strategy is one of the most <br /> important processes in marketing.
                        In fact, it supports your marketing voices to reach your <br /> target audience, creates interest, and helps you to engage with them.</Typography>
                    <Box sx={{ pt: 3 }}>
                        <Stack
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="center"
                            spacing={2}
                        >
                            <Image src={shieldicon} alt='Ảnh bìa' width={30}
                                height={30}></Image>
                            <Stack
                                direction="column"
                                justifyContent="flex-start"
                                alignItems="flex-start"
                                spacing={1}
                            >
                                <Typography variant='h5' sx={{}}>Safe and secured</Typography>
                                <Typography variant='body2' sx={{}}>Safe and secured promotion strategy is one of the <br /> most important processes in marketing.
                                </Typography>
                            </Stack>
                        </Stack>
                        <Stack
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="center"
                            spacing={2}
                            sx={{ pt: 3 }}
                        >
                            <Image src={ratingicon} alt='Ảnh bìa' width={30}
                                height={30}></Image>
                            <Stack
                                direction="column"
                                justifyContent="flex-start"
                                alignItems="flex-start"
                                spacing={1}
                            >
                                <Typography variant='h5' sx={{}}>Highly expert team</Typography>
                                <Typography variant='body2' sx={{}}>We supports your marketing voices to reach your <br /> target audience, creates interest.
                                </Typography>
                            </Stack>
                        </Stack>
                    </Box>

                </Grid>
                <Grid md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
                    <Image src={pic} alt='About us' width={570} height={500} style={{ borderRadius: '10%', }} />
                    <Image src={group13} alt='Chart' width={500} height={300} style={{ borderRadius: '10px', position: 'absolute', top: '55%', left: '35%' }} />
                </Grid>
            </Grid>
        </Box>
    )
}

export default AboutUs