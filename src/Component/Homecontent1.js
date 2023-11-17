import React from 'react';
import { Box, Button, Grid, Tooltip, Typography } from "@mui/material";


export default function HomeContent1() {
    return (
        <Box py={5}>
            <Typography paddingBottom={5} variant='h2'>Out Top Product</Typography>
            <Grid container >
                <Grid xs={4} md={5} bgcolor='teal'>
                    <Typography variant='h4'>Sidebar</Typography>
                    <Grid container>
                        <Typography color="red" variant='h5'>Search Here..</Typography>
                    </Grid>

                </Grid>
                <Grid xs={8} md={7} style={{ border: '2px solid red', backgroundColor: 'yellow' }} padding={2} >
                    <Typography variant='h4'>Product Container</Typography>
                    <Grid container style={{ border: '2px solid green', backgroundColor: 'white' }} p={1}   >
                        <Grid xs={6} md={4}  >
                            <Tooltip title="Delete">
                                <Typography variant='h6' >Product Container</Typography>
                                <Button variant='contained' sx={{ px: '10px', width: '120px' }} > Add to Cart</Button>
                            </Tooltip>
                        </Grid>
                        <Grid xs={6} md={4} p={1} style={{ backgroundColor: 'yellowgreen' }}>
                            <Typography variant='h6' >Product Container</Typography>
                            <Button variant='contained' sx={{ px: '10px', width: '120px' }} > Add to Cart</Button>
                        </Grid>
                        <Grid xs={6} md={4} p={1} style={{ backgroundColor: 'yellow' }} >
                            <Typography variant='h6' >Product Container</Typography>
                            <Button variant='contained' sx={{ px: '10px', width: '120px' }} > Add to Cart</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}