import React, { useEffect, useState } from 'react'
import { Box, Button, TextField, Typography } from "@mui/material";
import ProductCard from './Productcard';

export default function ApiCaller() {

  const [data, setData] = useState([])
  // const [value,setValue] = useState({})

  const [pname, setPname] = useState('')
  const [price, setPrice] = useState('')

  const [status, setStatus] = useState('')

  const pNamehandler = (event) => {
    setPname(event.target.value)
    console.log(pname);
  }

  const pricehandler = (event) => {
    setPrice(event.target.value)
    console.log(price);
  }

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

    console.log(pname, price);

    // var mypname="";
    // var myprice= "";
    fetch(`http://surevih.in/api/saveproduct?productname=${pname}&price=${price}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Network response was not ok.');
        }
      })
      .then(result => {
        console.log(result['status']);
        // console.log(result);
        // console.log(result['book'][0])
        var singledata = result['book'];
        // setData(result);
        setData(singledata);
        setStatus(result['status'])
      })

      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
        setStatus("Errors")
      });

  }
  console.warn("Data : ", data);
  return (
    <Box>
      <Typography variant="h2" >Welcome</Typography>
      <TextField variant='outlined' label='Product Name' id='pname' value={pname} onChange={pNamehandler}></TextField>
      <TextField variant='outlined' label='Price' id='price' type='number' onChange={pricehandler} ></TextField>
      {/* {
        data.map((item) =>
          <Box width={500} style={{ border: '2px solid black' }} textAlign='start' padding={5} my={2} >
            <Typography variant="h6" py={1}  >{item.id}</Typography>
            <Typography variant="h6" py={1} >{item.title}</Typography>
            <Typography variant="h6" py={1} >{item.price}</Typography>
            <Typography variant="h6" py={1} >{item.published}</Typography>
          </Box>    
        )
      } */}

      <Button variant="contained" onClick={handlerApi}>Save</Button>
      <Typography variant="h2" >{status}</Typography>

      <ProductCard />


    </Box>
  );
}


