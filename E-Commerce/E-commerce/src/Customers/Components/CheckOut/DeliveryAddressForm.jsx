import { Grid } from "@mui/material";
import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import { Button, TextField, Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { createOrder } from "../../../State/Order/Action";
import {  useNavigate } from "react-router-dom";
import { store } from "../../../State/store";


export default function DeliveryAddressForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {auth} = useSelector(store => store);
    console.log("auth ", auth);
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const address = {   
            firstName: data.get("firstName"),
            lastName: data.get("lastName"),
            address: data.get("address"),
            city: data.get("city"),
            state: data.get("state"),
            zip: data.get("zip"),
            phoneNumber: data.get("phoneNumber"),
        }
        const orderData = {address, navigate}
        // dispatch(createOrder(orderData));
        console.log("Address" + orderData);
    }
    return (
        <div>
            <Grid container spacing={4}>
                <Grid item xs={12} lg={5} className="border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll">
                    <div className="p-5 py-7 border-b cursor-pointer">
                        {/* { auth.user?.addresses.map((item) => <AddressCard address={item} />) } */}
                        <Button sx={{ mt: 2, bgcolor: "#FF3F6C" }} variant="contained" size="large" >Deliver Here</Button>
                    </div>
                </Grid>
                <Grid item xs={12} lg={7}>
                    <Box className="border rounded-s-md shadow-md p-5">
                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="firstName"
                                        name="firstName"
                                        label="First Name"
                                        fullWidth
                                        autocomplete="given-name" />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="lastName"
                                        name="lastName"
                                        label="Last Name"
                                        fullWidth
                                        autocomplete="given-name" />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        id="address"
                                        name="address"
                                        label="Address"
                                        fullWidth
                                        multiline
                                        rows={4}
                                        autocomplete="given-name" />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="city"
                                        name="city"
                                        label="City"
                                        fullWidth
                                        autocomplete="given-name" />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="state"
                                        name="state"
                                        label="State/Provision/Region"
                                        fullWidth
                                        autocomplete="given-name" />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="zip"
                                        name="zip"
                                        label="Zip / Postal Code"
                                        fullWidth
                                        autocomplete="shipping postal-code" />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="phoneNumber"
                                        name="phoneNumber"
                                        label="Phone Number"
                                        fullWidth
                                        autocomplete="given-name" />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Button sx={{ mt: 2, bgcolor: "#FF3F6C" }} variant="contained" size="large" type="submit" >Deliver Here</Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
}