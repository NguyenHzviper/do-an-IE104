import { Box, Typography } from '@mui/material'
import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel'
import CustomCardCaroucel from './CustomCardCaroucel'

type Props = {}

type State = {}

export default class MyCarousel extends Component<Props, State> {
    state = {}

    render() {
        return (
            <Box id="dịch vụ" sx={{ p: 10 }}>
                <Typography variant='h3' gutterBottom sx={{ textAlign: 'start', pb: 10 }}>Gói dịch vụ phổ biến</Typography>
                <Carousel autoPlay centerMode centerSlidePercentage={30} swipeable infiniteLoop emulateTouch showArrows={false} showStatus={false} showIndicators={false} showThumbs={false}>
                    <div>
                        <CustomCardCaroucel title='Gói cơ bản để bắt đầu chiến dịch quảng bá của bạn' price={100} />
                    </div>
                    <div>
                        <CustomCardCaroucel title='Gói tiêu chuẩn để phát triển doanh nghiệp của bạn' price={150} />
                    </div>
                    <div>
                        <CustomCardCaroucel title='Gói cao cấp để đẩy mạnh chiến dịch quảng bá của bạn' price={200} />
                    </div>
                    <div>
                        <CustomCardCaroucel title='Gói duy nhất để bắt đầu chiến dịch quảng bá của bạn' price={300} />
                    </div>
                </Carousel>
            </Box>

        )
    }
}