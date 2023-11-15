
import React from 'react'
import { Box } from "@mui/material";
import Dropdown from './Dropdown';

const navItems1 = [
    { "name": "Home", "link": "/" },
    { "name": "About Us", "link": "/supphome" },
];
const navItems2 = [
    { "name": "Taday,s Deals", "link": "/custhome" },
    { "name": "Contact Us", "link": "/supphome" },
    { "name": "Suppiler", "link": "/supphome" },
    { "name": "Customer", "link": "/custhome" }
];


// const navItemsn1 = ['Home' ,'About Us'];
// const navItemsn2 = ['Today`s Deals' ,'Contact Us'];
// const link1=['google.com','yahoo.com']
// const link2=['/custhome','supphome']


export default function Navbar() {
    return (
        <Box textAlign='start' sx={{
            // border: 2 ,
            // borderColor: 'grey',
            bgcolor: '#1769aa',
            fontSize:16,
            // fontSize: '0.875rem',
            paddingLeft: 4,
            // paddingRight: 5,
            display: { xs: 'flex', sm: 'flex' },
        }}>
            <Dropdown name='All Category' color='teal' />
            {navItems1.map((item) => (
                <a key={item.name} href={item.link} style={{ paddingLeft: 40, color: 'white', paddingTop: 5, textDecoration: 'none', fontWeight: 600 }}>
                    {item.name}
                </a>
            ))}

            <Dropdown name='Product' color='#1769aa' />
            {navItems2.map((item) => (
                <a key={item.name} href={item.link} style={{ paddingLeft: 40, color: 'white',paddingTop: 5, textDecoration: 'none', fontWeight: 600 }}>
                    {item.name}
                </a>
            ))}
            {/* {navItems2.map((item) => (
                <Button key={item.name} sx={{ color: 'white', paddingLeft: 5}}>
                    {item}
                </Button>
            ))} */}
        </Box>
    );
}