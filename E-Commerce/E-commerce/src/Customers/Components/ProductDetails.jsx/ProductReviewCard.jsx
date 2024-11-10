import React from "react";
import { Grid, Box, Avatar, Rating } from "@mui/material";

export default function ProductReviewCard() {
    return (
        <Grid container spacing={2} gap={3}>
            <Grid item xs={1}>
                <Box>
                    <Avatar className="text-white" sx={{width: "56", height: "56", bgcolor:"#FF3F6C"}}>V</Avatar>
                </Box>
            </Grid>
            <Grid item xs={9}>
                <div className="space-y-2">
                    <div>
                        <p className="font-semibold text-lg">Pookie</p>
                        <p className="opacity-70">October 26, 2024</p>
                    </div>
                </div>
                <Rating value={4.5} name="half-rating" readOnly precision={.5}/>
                    <p>I had an amazing experience! The product exceeded my expectations in terms of quality and performance. The customer service was also outstanding, making the entire process smooth and enjoyable. I only wish there were more color options available, but overall, I highly recommend it! Will definitely be coming back for more!</p>
            </Grid>
        </Grid>
    );
}