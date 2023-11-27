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
            <Box id="services" sx={{ p: 10 }}>
                <Typography variant='h3' gutterBottom sx={{ textAlign: 'start', pb: 10 }}>Popular packages</Typography>
                <Carousel autoPlay centerMode centerSlidePercentage={30} swipeable infiniteLoop emulateTouch showArrows={false} showStatus={false} showIndicators={false} showThumbs={false}>
                    <div>
                        <CustomCardCaroucel title='The basic package to start your promotion' />
                    </div>
                    <div>
                        <CustomCardCaroucel title='The standard package to 
grow your business' />
                    </div>
                    <div>
                        <CustomCardCaroucel title='The premium package to 
boost your promotion' />
                    </div>
                    <div>
                        <CustomCardCaroucel title='The single package to start your promotion' />
                    </div>
                    <div>
                        <CustomCardCaroucel title='The single package to start your promotion' />
                    </div>
                </Carousel>
            </Box>

        )
    }
}