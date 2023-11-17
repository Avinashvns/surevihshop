
// import React from 'react';

// export default function SignUp(){
//     return (
//         <div>
//             hi
//         </div>
//     );
// }


import React, { useState } from 'react';
import { TextField, Button, Typography, Grid, Box, FormGroup, FormControlLabel } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import signinpic from '../../assets/images/login.jpg';
import { CheckBox } from '@mui/icons-material';


function SignUp() {
    const [name,setName]=useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ name,email, password });
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
        <Box sx={{ flexGrow: 1, padding: 5 }}>
            <Grid container spacing={2} sx={{ border: '40px solid pink', borderRadius: 2 }} >
                {/* Image use */}
                <Grid xs={12} md={8} >
                    <Box padding={5} > 
                        <img src={signinpic} alt='Sign in image' style={{ width: '100%', maxWidth: '100%', borderRadius: 20}} />
                    </Box>

                </Grid>
                {/* Login Form */}

                <Grid xs={12} md={4} px={2} paddingTop={5} spacing={5}  >
                
                    <form onSubmit={handleSubmit} >
                        
                        <Typography align='left' variant='h4' >Register</Typography>

                        <Typography align='left' variant='h6'>Please Enter Your Login Details</Typography>
                        
                        <TextField
                            required
                            label="Full Name"
                            id='name'
                            defaultValue=''
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            // helperText="Enter Email Id"
                            // value={email}
                            // onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField
                            required
                            label="Email"
                            id='email'
                            defaultValue=''
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            // helperText="Enter Email Id"
                            // value={email}
                            // onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField
                            required
                            label="Password"
                            id='password'
                            defaultValue=''
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            // value={password}
                            // onChange={(e) => setPassword(e.target.value)}
                        />
                        
                        {/* <FormGroup >
                            <FormControlLabel sx={{px: 1}} control={<CheckBox />} label='I agree All the Statement in'  />
                            <Button>Terms of service</Button>
                        </FormGroup> */}

                        <Box display='flex' >
                            <CheckBox />
                            <Typography align='start' px={2}>I agree All the Statement in <Button sx={{ paddingTop:0 , textTransform: 'lowercase' }} >Terms of service</Button></Typography>                    
                        </Box>
                        
                        
                            <Button style={{ color: "black", backgroundColor: 'pink'}}
                            // fullWidth={true}
                            type="submit"
                            variant="contained"
                            // color="primary"
                            // margin="normal"
                            sx={{ px: '120px', marginBottom: 2}}
                        >
                            Sign up
                        </Button>
                        
                    </form>
                </Grid>

            </Grid>
        </Box>
    );
}

export default SignUp;