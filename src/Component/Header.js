
import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import Typography from '@mui/material/Typography';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { List, ListItem, ListItemButton, ListItemText, ListItemIcon, Divider } from '@mui/material';

import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchField from './Searchfield';
import Navbar from './Navbar';



const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    // Override media queries injected by theme.mixins.toolbar
    // '@media all': {
    //   minHeight: 128,
    // },
}));



export default function Header() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <StyledToolbar>

                    <Box display='flex' sx={{ flexGrow: 1, p: "20px", textAlign: 'center' }}>
                        <Typography
                            variant="h4"
                            noWrap
                            component="div"
                            sx={{ alignSelf: 'flex-start' }}
                        >
                            SUREVIH
                        </Typography>
                        <ShoppingCartIcon style={{ fontSize: '50', padding: "0px 10px" }} />
                    </Box>

                    <Box >
                        <List >
                            <ListItem disablePadding  >
                                <ListItemButton href='/apicaller' >
                                    <ListItemIcon  >
                                        <LocationOnIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Shop Locator" />
                                </ListItemButton>
                                <Divider orientation='vertical' flexItem color="red" />
                                <ListItemButton >
                                    <ListItemIcon  >
                                        <LocationOnIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Track Order" />
                                </ListItemButton>
                                <Divider orientation='vertical' flexItem color="red" />
                                <ListItemButton >
                                    <ListItemIcon  >
                                        <LocationOnIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="0012345678" />
                                </ListItemButton>
                                <Divider orientation='vertical' flexItem color="red" />
                                <ListItemButton href='/signin'>
                                    <ListItemIcon  >
                                        <LocationOnIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Sign In" />
                                </ListItemButton>
                                <Divider orientation='vertical' flexItem color="red" />
                                <ListItemButton href='/signup'>
                                    <ListItemIcon  >
                                        <LocationOnIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Sign Up" />
                                </ListItemButton>
                                <Divider orientation='vertical' flexItem color="red" />
                            </ListItem>
                        </List>

                        <SearchField />
                    </Box>
                </StyledToolbar>

                {/* <Navbar /> */}
                <Navbar />

            </AppBar>
        </Box>
    );
}