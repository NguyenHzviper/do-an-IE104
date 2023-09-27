import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


type Props = {
    title: string,
    content: string,
    image: string
}

export default function MediaCard(props: Props) {
    return (
        <Card sx={{ maxWidth: 370 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={props.image}
                title={props.title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5">
                    {props.title}
                </Typography>
                <Typography variant="body2">
                    {props.content}
                </Typography>
            </CardContent>
        </Card>
    );
}