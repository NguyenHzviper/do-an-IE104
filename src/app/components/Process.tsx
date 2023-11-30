import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import CustomCard from './CustomCard';
import packageicon from '../../../image/package.png'
import charticon from '../../../image/chart.png'
import calendericon from '../../../image/calender.png'
import { Paper } from '@mui/material';
type Props = {}



const Process = (props: Props) => {
    return (
        <Paper square id="start" sx={{ p: 10 }}>
            <Grid container spacing={4}>
                <Grid xs={12}>
                    <Typography variant='h3' gutterBottom sx={{ textAlign: 'center' }}>How it works</Typography>
                    <Typography variant='body2' sx={{ textAlign: 'center', pb: 3 }}>Businesses generally promote their brand, products, and <br /> services by identifying audience.</Typography>
                </Grid>
                <Grid xs={12} md={4}>
                    <CustomCard title='Choose packages' image={packageicon} content='Businesses thrive by targeting and tailoring promotions through extensive research and consumer insights.'></CustomCard>
                </Grid>
                <Grid xs={12} md={4}>
                    <CustomCard title='Schedule appointment' image={calendericon} content='When you have important information to pass onto your people, text messaging can be a great way to do it.'></CustomCard>
                </Grid>
                <Grid xs={12} md={4}>
                    <CustomCard title='Grow together' image={charticon} content='Texting can sometimes come across as an impersonal way to communicate, it 
can be highly beneficial.'></CustomCard>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default Process