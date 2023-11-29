import { FormControl, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import { useEffect, useState } from "react";
 


export default function Selectbox(props){
    const [data, setData] = useState([]);
    const [showuser, setShowUser] = useState('');

    // Api Call ----
    useEffect(() => {
        // console.log("hi")
        // fetch(`http://surevih.in/api/allusertype`)
        console.log("In:-",props.url)

        // const url=`http://surevih.in/api/allusertype`;
        // ApiGetData(url);

        fetch(props.url)
            .then(res => {
                // console.log(res.json())
                if (res.ok) {
                    const x = res.json();
                    // console.log(x);
                    return x;
                }
                else {
                    throw new Error('Network res was not ok.');
                }
            })
            .then(result => {
                console.log(" Result :- ", result);
                let y = result['usertypes']
                // console.log(y)
                setData(y)
            })
    }, [])

    const handleChange = (event) => {
        // console.log("data  :" , jsonvalue);
        console.log("Target Value :- ", event.target.value);
        setShowUser(event.target.value);
    };

    console.log("All types data", data)   

    return(
        <FormControl fullWidth>
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
                                <MenuItem key={item.id} value={item.id}>{item.usertype}</MenuItem>                               
                                )
                            }
                        </Select>
                        {/* <Typography >User id:- {showuser}</Typography> */}
                    </FormControl>
    );
}