import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import OrderTracker from "./OrderTracker";
import { Grid, Box } from "@mui/material";
import StarBorderIcon from '@mui/icons-material/StarBorder';

export default function OrderDetails() {
    return (
        <div className="px-10 lg:px-20 py-2 lg:py-5">
            <div>
                <h1 className="font-bold text-xl py-5">Delivery Address</h1>
                <AddressCard />
            </div>
            <div className="py-20">
                <OrderTracker activeStep={3} />
            </div>
            <Grid className="space-y-5" container>
                {
                    [1, 1, 1, 1, 1].map((item) => <Grid item container className="shadow-xl rounded-md p-5 border" sx={{ alignItems: "center", justifyContent: "space-between" }}>
                        <Grid item xs={6}>
                            <div className="flex item-center space-x-4">
                                <img className="w-[10rem] h-[10rem] object-cover object-top" src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2024/SEPTEMBER/27/dnCA8jjw_211bc9e0f69341acba6c75e780f3c523.jpg" alt="product-status" />
                                <div className="space-y-2 ml-5">
                                    <p className="font-semibold">Women Striped Fit & Flare Midi Dress</p>
                                    <p className="space-x-2 opacity-50 text-xs font-semibold"><span>color: Blue</span> <span>size: S</span></p>
                                    <p className="space-x-5 opacity-50 text-xs font-semibold">Sold By: Linaria</p>
                                    <p>₹1099</p>
                                </div>
                            </div>
                        </Grid>
                        <Grid item >
                            <Box sx={{ color: "#4BB543" }}>
                                <StarBorderIcon className="px-2" style={{ fontSize: "2rem" }} />
                                <span>Rate & Review Product</span>
                            </Box>
                        </Grid>
                    </Grid>)
                }

            </Grid>
        </div>
    );
}