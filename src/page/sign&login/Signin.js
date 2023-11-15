
import React, { useState } from 'react';
import { TextField, Button, Typography, Grid, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import signinpic from '../../assets/images/login.jpg';


function SignIn() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ email, password });
    };
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    })
    );

    return (
        <Box sx={{ flexGrow: 1, paddingTop: 5, paddingLeft: 5 }}>
            <Grid container spacing={2} sx={{ border: '4px solid red' }} >
                {/* Image use */}
                <Grid xs={12} md={8}  >
                    <Item>
                        <img src={signinpic} alt='Sign in image' />
                    </Item>
                </Grid>
                {/* Login Form */}
                <Grid xs={12} md={4} >
                    <Item style={{ padding: 5 }}>

                        <form onSubmit={handleSubmit}>
                            <Typography>Sign In Form</Typography>
                            <TextField
                                label="Email"
                                variant="outlined"
                                margin="normal"
                                fullWidth
                            // value={email}
                            // onChange={(e) => setEmail(e.target.value)}
                            />
                            <TextField
                                label="Password"
                                variant="outlined"
                                margin="normal"
                                fullWidth
                            // value={password}
                            // onChange={(e) => setPassword(e.target.value)}
                            />
                            <Button href='#'>Forget Password</Button>
                            <br />
                            <Button style={{ color: "white", backgroundColor: 'red' }}
                                type="submit"
                                variant="contained"
                                // color="primary"
                                margin="normal"
                            >
                                Sign In
                            </Button>
                        </form>
                    </Item>
                </Grid>

            </Grid>
        </Box>
    );
}

export default SignIn;