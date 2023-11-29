import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import signinpic from '../../assets/images/login.jpg';
import Selectbox from "../../Component/Select";


export default function Testing() {    
   const ApiGetData=window.apiGetData;
    const f=window.f;

    const handlerClick=()=>{
        console.log("Clicked")
        const urldata='http://surevih.in/api/allusertype';
        ApiGetData(urldata);
    }
    return (
        <Box sx={{ flexGrow: 1, padding: 5 }}>
            <Grid container spacing={2} sx={{ border: '40px solid pink', borderRadius: 2 }} >

                {/* Image use */}
                <Grid item xs={12} md={8} >
                    <Box padding={5} >
                        <img src={signinpic} alt='Sign in image' style={{ width: '100%', maxWidth: '100%', borderRadius: 20 }} />
                    </Box>
                </Grid>

                {/* Login Form */}
                <Grid item xs={12} md={4} px={2} paddingTop={5}  >
                    {/* DropDown */}
                    <Typography align='left' variant='h4' >Drop Down List</Typography>
                    {/* <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">User Type</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={showuser}
                            label="Show User Type"
                            onChange={handleChange}
                        >
                            {
                                data.map((item) =>
                                // <Box>
                                //     <MenuItem value={item.id}>{item.usertype}</MenuItem>  
                                // </Box>
                                <MenuItem value={item.id}>{item.usertype}</MenuItem>                               
                                )
                            }
                        </Select>
                        <Typography >User id:- {showuser}</Typography>
                    </FormControl> */}
                    {/* <Selectbox url='http://surevih.in/api/allusertype' /> */}
                    {/* <Selectbox /> */}
                    
                    {/* button */}
                    <Button onClick={handlerClick} >
                        Click Me 
                    </Button>
                    <h1 onClick={f}>Click</h1>
                </Grid>

            </Grid>
        </Box>
    );
}

// const MySelectComponent = () => {
//     const [selectedValue, setSelectedValue] = useState('');
  
//     const handleChange = (event) => {
//         console.log("Target Value :- ", event.target.value);
//       setSelectedValue(event.target.value);
//     };
  
//     const usertypes = [
//       {
//         id: 1,
//         usertype: 'administrator',
//         remark: 'admin',
//         creation_date: '2023-11-25 02:26:05',
//         updated_date: '2023-11-25 02:26:05',
//       },
//       {
//         id: 2,
//         usertype: 'owner',
//         remark: 'owner area',
//         creation_date: '2023-11-25 10:24:41',
//         updated_date: '2023-11-25 10:24:41',
//       },
//       {
//         id: 3,
//         usertype: 'tenant',
//         remark: 'only tenant',
//         creation_date: '2023-11-25 04:06:59',
//         updated_date: '2023-11-25 04:06:59',
//       },
//     ];
  
//     return (
//       <FormControl>
//         <InputLabel id="usertype-label">Select User Type</InputLabel>
//         <Select
//           labelId="usertype-label"
//           id="usertype-select"
//           value={selectedValue}
//           onChange={handleChange}
//         >
//           {usertypes.map((userType) => (
//             <MenuItem key={userType.id} value={userType.id}>
//               {userType.usertype}
//             </MenuItem>
//           ))}
//         </Select>
//       </FormControl>
//     );
//   };
  
//   export default MySelectComponent;