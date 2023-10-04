import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Image, { StaticImageData } from 'next/image';
import calender from '../../../image/calender.png'
import { Box } from '@mui/material';

type Props = {
    title: string,
    content: string,
    image: StaticImageData
}

export default function MediaCard(props: Props) {
    return (
        <Card sx={{ height: 300, maxWidth: 370 }}>
            <Box sx={{ m: 2 }}>
                <Image src={props.image} alt='Ảnh bìa'></Image>
            </Box>
            <CardContent sx={{ mt: 2 }}>
                <Typography gutterBottom variant="h5">
                    {props.title}
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 2 }}>
                    {props.content}
                </Typography>
            </CardContent>
        </Card>
    );
}