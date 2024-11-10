import React from "react";
import { Grid } from "@mui/material";
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from "react-router-dom";

export default function OrderCard() {
    const navigate = useNavigate();
    return (
        <div onClick={() => navigate(`/account/order/${5}`)} className="mt-10 p-5 shadow-lg hover:shadow-2xl">
            <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>

                <Grid item xs={6}>

                    <div className="flex cursor-pointer ">
                        <img className="w-[5rem] h-[5rem] object-cover object-top" src="https://assets.myntassets.com/f_webp,w_200,c_limit,fl_progressive,dpr_2.0/assets/images/21242968/2023/8/3/bbd41913-f17d-4773-9330-9c55fb1b60261691063019514TommyHilfigerHoodedJumperDress1.jpg" alt="pink-tshirt-image" />
                        <div className="ml-5 space-y-2">
                            <p>Hooded Jumper Dress</p>
                            <p className="opacity-50 text-xs font-semibold">size: S</p>
                            <p className="opacity-50 text-xs font-semibold">color: Pink</p>
                        </div>
                    </div>

                </Grid>

                <Grid item xs={2}>
                    <p>₹1099</p>
                </Grid>

                <Grid item xs={4}>
                    {true && <div>
                        <p>
                            <AdjustIcon sx={{ width: "15px", height: "15px" }} className="text-green-700 mr-2 text-sm" />
                            <span>Delivered On march 03</span>

                        </p>
                        <p className="text-xs">
                                Your Item Has Been Delivered
                        </p>
                    </div>}
                    {false && <p>
                        <span>Expected Delivery On march 03</span>
                    </p>}
                </Grid>

            </Grid>
        </div>
    );
}