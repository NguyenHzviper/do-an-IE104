import React from 'react'
import { Avatar, AvatarGroup, Box, Stack, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
type Props = {
    title: string,
}

const CustomCardCaroucel = (props: Props) => {
    return (
        <Card sx={{ maxWidth: 370, maxHeight: 436, borderRadius: "10px" }}>
            <Box sx={{ m: 2 }}>
                <CardMedia
                    sx={{ borderRadius: 2 }}
                    component="img"
                    height="270"
                    image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                    alt="green iguana"
                />
            </Box>
            <CardContent>
                <Typography sx={{ textAlign: 'start' }} gutterBottom variant="h5" component="div">
                    {props.title}
                </Typography>
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={2}
                >
                    <AvatarGroup max={3} sx={{ float: 'left' }}>
                        <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
                        <Avatar alt="Travis Howard" src="https://mui.com/static/images/avatar/2.jpg" />
                        <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/3.jpg" />
                        {/* <Avatar alt="Agnes Walker" src="https://mui.com/static/images/avatar/4.jpg" />
                    <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/5.jpg" /> */}
                    </AvatarGroup>
                    <Typography sx={{ float: 'right', textAlign: "center", color: "#00E5CC", fontWeight: "bold" }} variant="body2" >100$</Typography>

                </Stack>

            </CardContent>

        </Card>
    )
}

export default CustomCardCaroucel