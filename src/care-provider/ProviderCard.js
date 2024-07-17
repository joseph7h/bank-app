import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

export default function ProviderCard() {
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography variant="body2">
                    <strong>Rajdeep Karmakar</strong>
                    <br />
                    919-666-8888
                    <br />
                    rkarmakar@gmail.com
                </Typography>
            </CardContent>
            <CardMedia
            component="img"
            height="140"
            image="https://d2jv02qf7xgjwx.cloudfront.net/accounts/183381/profiles/180241/Screen_Shot_2022-08-10_at_10.39.01_PM.png"
            alt="Placard"
            />
            <CardActions>
                <Button size="small">Reach Out</Button>
            </CardActions>
        </Card>
    );
}
