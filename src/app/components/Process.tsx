import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CustomCard from './CustomCard';
import packageicon from '../../../image/package.png'
import charticon from '../../../image/chart.png'
import calendericon from '../../../image/calender.png'
type Props = {}



const Process = (props: Props) => {
    return (
        <Box sx={{ backgroundColor: 'white', p: 10 }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant='h3' sx={{ textAlign: 'center' }}>How it works</Typography>
                    <Typography variant='body2' sx={{ textAlign: 'center', pt: 1 }}>Businesses generally promote their brand, products, and <br /> services by identifying audience.</Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <CustomCard title='haha' image='dasf' content='lmao'></CustomCard>
                </Grid>
                <Grid item xs={12} md={4}>
                    <CustomCard title='haha' image='dasf' content='lmao'></CustomCard>
                </Grid>
                <Grid item xs={12} md={4}>
                    <CustomCard title='haha' image='dasf' content='lmao'></CustomCard>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Process