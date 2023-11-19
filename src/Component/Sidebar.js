import { Box, Checkbox, Divider, FormControlLabel, FormGroup, Rating, Slider, Typography } from "@mui/material";
import React, { useState } from 'react';
import SearchField from "./Searchfield";




export default function Sidebars() {
    const [value , setValue] =useState([20,35]);
    // const [ratingvalue, setRatingValue] =useState(3);

    const handleChange=(event ,newValue)=>{
        setValue(newValue);
    }
    return (
        <Box sx={{textAlign: 'start'}} >
            <Typography  color="red" variant='h6'>Search Here...</Typography>
            <SearchField />
            <Divider sx={{ marginTop: 2 ,marginBottom: 2, bgcolor: 'grey' }} />

            <Typography  color="red" variant='h6'>Price Range</Typography>
            <Typography  variant='p'>$ {value[0]}<span style={{margin: 10}}>-</span>$ {value[1]}</Typography>
            <Slider aria-label="volume" valueLabelDisplay="auto" value={value} onChange={handleChange} sx={{ color: 'red' }} />
            <Divider sx={{ marginTop: 2 ,marginBottom: 2, bgcolor: 'grey' }} />

            <Typography  color="red" variant='h6'>Food Preference</Typography>
            <FormGroup sx={{paddingLeft:1 , paddingTop: 1}}>
                <FormControlLabel control={<Checkbox {...{inputProps: {'aria-label' : 'checkbox'}}} sx={{p: 0 , paddingRight: 2}} />} label="Vegetarian" />
                <FormControlLabel control={<Checkbox {...{inputProps: {'aria-label' : 'checkbox'}}} sx={{p: 0 , paddingRight: 2}} />} label="Non-Vegetarian" />
            </FormGroup>
            <Divider sx={{ marginTop: 2 ,marginBottom: 2, bgcolor: 'grey' }} />

            <Typography  color="red" variant='h6'>Discount</Typography>
            <FormGroup sx={{paddingLeft:1 , paddingTop: 1}}>
                <FormControlLabel control={<Checkbox {...{inputProps: {'aria-label' : 'checkbox'}}} sx={{p: 0 , paddingRight: 2}} />} label="5% or More" />
                <FormControlLabel control={<Checkbox {...{inputProps: {'aria-label' : 'checkbox'}}} sx={{p: 0 , paddingRight: 2}} />} label="10% or More" />
                <FormControlLabel control={<Checkbox {...{inputProps: {'aria-label' : 'checkbox'}}} sx={{p: 0 , paddingRight: 2}} />} label="20% or More" />
                <FormControlLabel control={<Checkbox {...{inputProps: {'aria-label' : 'checkbox'}}} sx={{p: 0 , paddingRight: 2}} />} label="30% or More" />                
                <FormControlLabel control={<Checkbox {...{inputProps: {'aria-label' : 'checkbox'}}} sx={{p: 0 , paddingRight: 2}} />} label="40% or More" />
                <FormControlLabel control={<Checkbox {...{inputProps: {'aria-label' : 'checkbox'}}} sx={{p: 0 , paddingRight: 2}} />} label="50% or More" />
                <FormControlLabel control={<Checkbox {...{inputProps: {'aria-label' : 'checkbox'}}} sx={{p: 0 , paddingRight: 2}} />} label="60% or More" />
            </FormGroup>
            <Divider sx={{ marginTop: 2 ,marginBottom: 2, bgcolor: 'grey' }} />

            <Typography  color="red" variant='h6'>Customer Review</Typography>
            <Box display='flex' flexDirection='column'  >
                <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly /> 
                <Rating name="half-rating-read" defaultValue={4} readOnly />
                <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly /> 
                <Rating name="half-rating-read" defaultValue={3} readOnly />
                <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
            </Box>
            <Divider sx={{ marginTop: 2 ,marginBottom: 2, bgcolor: 'grey' }} />

            <Typography  color="red" variant='h6'>Categories</Typography>
            <FormGroup sx={{paddingLeft:1 , paddingTop: 1}}>
                <FormControlLabel control={<Checkbox {...{inputProps: {'aria-label' : 'checkbox'}}} sx={{p: 0 , paddingRight: 2}} />} label="Grocery" />
                <FormControlLabel control={<Checkbox {...{inputProps: {'aria-label' : 'checkbox'}}} sx={{p: 0 , paddingRight: 2}} />} label="Fruits" />
                <FormControlLabel control={<Checkbox {...{inputProps: {'aria-label' : 'checkbox'}}} sx={{p: 0 , paddingRight: 2}} />} label="Foft Drinks" />
                <FormControlLabel control={<Checkbox {...{inputProps: {'aria-label' : 'checkbox'}}} sx={{p: 0 , paddingRight: 2}} />} label="Biscuit" />                
                <FormControlLabel control={<Checkbox {...{inputProps: {'aria-label' : 'checkbox'}}} sx={{p: 0 , paddingRight: 2}} />} label="Baby Diapers" />
                <FormControlLabel control={<Checkbox {...{inputProps: {'aria-label' : 'checkbox'}}} sx={{p: 0 , paddingRight: 2}} />} label="Oil" />
            </FormGroup>
            <Divider sx={{ marginTop: 2 ,marginBottom: 2, bgcolor: 'grey' }} />
        </Box>
    );
}