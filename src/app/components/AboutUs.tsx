import React from 'react'
import Grid from '@mui/material/Unstable_Grid2';
import { Stack, Typography, Box, Paper } from '@mui/material';
import Image, { StaticImageData } from 'next/image';
import pic from '../../../image/image 56.png'
import shieldicon from '../../../image/shield 1.svg'
import ratingicon from '../../../image/rating 1.svg'
import group13 from '../../../image/Group 13.svg'
type Props = {}

const AboutUs = (props: Props) => {
    return (
        <Paper square id="giới thiệu" sx={{ p: 10, position: 'relative' }}>
            <Grid container spacing={4}>
                <Grid xs={12} md={6}>
                    <Typography variant='h3' gutterBottom sx={{}}>Về chúng tôi</Typography>
                    <Typography variant='body2' sx={{ pb: 3 }}>Không có gì ngạc nhiên khi chiến lược quảng bá là một trong những quy trình quan trọng nhất trong marketing. <br /> Trên thực tế, nó hỗ trợ giọng điệu tiếp thị của bạn để tiếp cận đối tượng khách hàng, tạo ra sự quan tâm và giúp bạn tương tác với họ.</Typography>
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
                                <Typography variant='h5' sx={{}}>An toàn và bảo mật</Typography>
                                <Typography variant='body2' sx={{}}>Chiến lược quảng bá an toàn và bảo mật là một trong những quy trình quan trọng nhất trong lĩnh vực tiếp thị.
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
                                <Typography variant='h5' sx={{}}>Đội ngũ chuyên gia cao cấp</Typography>
                                <Typography variant='body2' sx={{}}>Chúng tôi hỗ trợ cách tiếp thị của bạn <br /> để tiếp cận đối tượng khách hàng, tạo ra sự quan tâm.
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
        </Paper>
    )
}

export default AboutUs