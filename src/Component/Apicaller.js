import React, { useEffect, useState } from 'react'
import { Box, Button, Typography } from "@mui/material";

export default function ApiCaller() {
  const [data, setData] = useState([])

  useEffect(() => {
    console.log("hi");
    fetch('http://surevih.in/api/allbook')
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Network response was not ok.');
        }
      })
      .then(result => {
        // console.log(result);
        // console.log(result['book'][0])
        var singledata = result['book'];
        // setData(result);
        setData(singledata);
      })

      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }, [])

  const handlerApi = () => {

  }
  console.warn("Data : ", data);
  return (
    <Box>
      <Typography variant="h2" >Welcome</Typography>
      {
        data.map((item) =>
          <Box width={500} style={{ border: '2px solid black' }} textAlign='start' padding={5} my={2} >
            <Typography variant="h6" py={1}  >{item.id}</Typography>
            <Typography variant="h6" py={1} >{item.title}</Typography>
            <Typography variant="h6" py={1} >{item.price}</Typography>
            <Typography variant="h6" py={1} >{item.published}</Typography>
          </Box>
        )
      }

      <Button variant="contained" onClick={handlerApi}>Save</Button>
    </Box>
  );
}