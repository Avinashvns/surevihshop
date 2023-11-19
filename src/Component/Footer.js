import { Box, Button, Grid, Typography } from "@mui/material";



export default function Footer() {
    return (
        <Box >
            <Grid container bgcolor='grey' sx={{ padding: 2 ,paddingTop: 3,paddingBottom: 5}}>
                <Grid xs={4} textAlign='start' >
                    <Typography variant="h5" style={{ fontWeight: 'bold' }}> SUREVIH</Typography>
                    <br />
                    <Typography variant="body1"  > Address: B 32/43-3 Saket Nagar Varanasi</Typography>
                    <br />
                    <Typography variant="body1"> Phone: +918423641097</Typography>
                    <br />
                    <Typography variant="body1"> Email: surevih@gmail.com</Typography>
                </Grid>

                <Grid xs={4} style={{ paddingLeft: 5 }}>
                    <Typography variant="h5" style={{ fontWeight: 'bold' }} textAlign='start' > Useful Links</Typography>
                    <Grid container style={{ paddingTop: 15 }}>
                        <Grid xs={6} md={6} textAlign='start'>
                                <Button sx={{ color: 'black' }}>About Us</Button>
                                <br />
                                <Button sx={{ color: 'black' }}>Security </Button>
                                <br />
                                <Button sx={{ color: 'black' }}>Delivery </Button>
                                <br />
                                <Button sx={{ color: 'black' }}>Privacy Policy</Button>
                          
                        </Grid>
                        <Grid xs={6} md={6} textAlign='start' >
                            <Button sx={{ color: 'black' }}>Our Services</Button>
                            <br />
                            <Button sx={{ color: 'black' }}>Contact</Button>
                            <br/>
                            <Button sx={{ color: 'black' }}>Innovation</Button>
                            <br />
                            <Button sx={{ color: 'black' }}>Location</Button>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid xs={4} style={{ paddingLeft: 20 }} textAlign='start'>
                    <Typography variant="h6" style={{ fontWeight: 'bold' }}> Join Our Newsletter Now </Typography>
                    <br />
                    <Typography variant="p" > Get E-mail updates about our letest shop and special offers.</Typography>
                    <br />
                    <br />
                    <Typography variant="body1" sx={{ paddingBottom: 2 }}> Phone : +918423641097</Typography>
                    <Typography variant="body1"> Email : surevih@gmail.com</Typography>
                </Grid>
                <Typography variant="body1" sx={{ paddingBottom: 2,paddingTop: 5 }}>Copyright @2023 All right reserved made by <Button style={{color:"red"}}>Avinash Singh</Button></Typography>
            </Grid>
            
        </Box>
    );
}