
import React, { useEffect, useState } from 'react';
import { TextField, Button, Typography, Grid, Box, FormGroup, FormControlLabel, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import signinpic from '../../assets/images/login.jpg';
import { CheckBox } from '@mui/icons-material';
// import Dropdown from '../../Component/Dropdown';


function SignUp() {
    const [data, setData] = useState('');
    const [usertype, setUsertype] = useState('');
    const [remark, setRemark] = useState('');
    const [showuser, setShowUser] = useState('');

    const [userdatatype, setDataUserType] = useState([]);


    const [name,setName]=useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const userhandler = (event) => {
        setUsertype(event.target.value)
        console.log(usertype);
    }

    const remarkhandler = (event) => {
        setRemark(event.target.value)
        console.log(remark);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log({ name,email, password });
        console.log({ usertype, remark });
    };
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    })
    );

    const handlerApi = () => {

        console.log(usertype, remark);

        fetch(`http://surevih.in/api/usertypes?usertype=${usertype}&remark=${remark}`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Network response was not ok.');
                }
            })
            .then(result => {
                // console.log(result['status']);
                console.log(result);
                console.log("hi")
                var mydata = result['usertypes'];
                setData(mydata);
                // setData()
            })

            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
                // setRemark("Errors");
            });


    }
    console.warn("Data : ", data);


    // useEffect(() => {
    //     fetch(`http://surevih.in/api/allusertype`)
    //         // console.log("2")
    //         .then(response => {
    //             if (response.ok) {
    //                 const x = response.json();
    //                 console.log(x);
    //                 return x;
    //             } else {
    //                 throw new Error('Network response was not ok.');
    //             }
    //         })
    //         .then(result => {
    //             // console.log(result['status']);
    //             console.log("hi")
    //             console.log(result);
    //             console.log("hi")
    //             // let userdata = result['usertypes'];
    //             console.log("loop")
    //             setDataUserType(result['usertypes']);
    //             // console.log(userdata);
    //             // console.log("User type :" , userdata[0]["usertype"])
    //             // setUserData(userdata);
    //             // setData()
    //         })

    //         .catch(error => {
    //             console.error('There was a problem with the fetch operation:', error);
    //             // setRemark("Errors");
    //         });
            
    // })

    // const handleChange = (event) => {
    //     // userdatatype.map((item)=>
    //     //     value=item.id
    //     //     setShowUser(event.target.value)
    //     // );
    //     console.log('hi welcome');
    //     setShowUser(event.target.value);
    // };

    // console.log("All types", userdatatype)

    return (
        <Box sx={{ flexGrow: 1, padding: 5 }}>
            <Grid container spacing={2} sx={{ border: '40px solid pink', borderRadius: 2 }} >
                {/* Image use */}
                <Grid xs={12} md={8} >
                    <Box padding={5} >
                        <img src={signinpic} alt='Sign in image' style={{ width: '100%', maxWidth: '100%', borderRadius: 20 }} />
                    </Box>

                </Grid>
                {/* Login Form */}

                <Grid xs={12} md={4} px={2} paddingTop={5} spacing={5}  >

                    <form onSubmit={handleSubmit} >
                        <Typography align='left' variant='h4' >Register</Typography>
                        <Typography align='left' variant='h6'>Please Enter Your Login Details</Typography>
                        <TextField
                            required
                            label="User Type"
                            id='user_types'
                            defaultValue=''
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            // helperText="Enter Email Id"
                            value={usertype}
                            onChange={userhandler}
                        />
                        <TextField
                            required
                            label="Remark"
                            id='remarks'
                            defaultValue=''
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            // helperText="Enter Email Id"
                            value={remark}
                            onChange={remarkhandler}
                        />

                        {/* <TextField
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
                        /> */}

                        {/* <FormGroup >
                            <FormControlLabel sx={{px: 1}} control={<CheckBox />} label='I agree All the Statement in'  />
                            <Button>Terms of service</Button>
                        </FormGroup> */}

                        <Box display='flex' >
                            <CheckBox />
                            <Typography align='start' px={2}>I agree All the Statement in <Button sx={{ paddingTop: 0, textTransform: 'lowercase' }} >Terms of service</Button></Typography>
                        </Box>


                        <Button style={{ color: "black", backgroundColor: 'pink' }}
                            // fullWidth={true}
                            type="submit"
                            variant="contained"
                            // color="primary"
                            // margin="normal"
                            onClick={handlerApi}
                            sx={{ px: '120px', marginBottom: 2 }}
                        >
                            Sign up
                        </Button>
                    </form>



                    {/* DropDown */}

                    
                </Grid>

            </Grid>
        </Box>
    );
}

export default SignUp;