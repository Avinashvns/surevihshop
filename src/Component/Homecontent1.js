import React, { useEffect, useState } from 'react';
import { Box, Button, Grid, Tooltip, Typography } from "@mui/material";
import ProductCard from './Productcard';
import Sidebars from './Sidebar';


export default function HomeContent1() {
    // const [color1,setColor1] =useState('');
    // useEffect(()=>{
    //     console.log('hi')
    //     fetch('http://surevih.in/public/json/sampale.html')
    //         .then(res=> res.text())
    //         .then(result=> {
    //             console.log(result);
    //             // setColor1(result)
    //         })
    //         .catch(error=>{
    //             console.error('This is the errors ' , error);
    //         });
    // },[])
    // // console.log(color1);
    return (
        <Box paddingTop={5}>
            <Typography paddingBottom={5} variant='h2' >Our Top Product</Typography>
            <Grid container >

                {/* Sidebar */}
                <Grid xs={4} md={3} sx={{ p: 2 , backgroundColor: '#bdbdbd'}}>
                    <Sidebars />
                </Grid>

                {/* Content */}
                <Grid xs={8} md={9} style={{ border: '2px solid red', backgroundColor: 'yellow' }} padding={2} >
                    <Typography variant='h4'>Product Container</Typography>
                    <Grid container style={{ border: '2px solid green', backgroundColor: 'white' }} p={1}   >
                        <Grid xs={6} md={4}  >
                            <ProductCard />
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