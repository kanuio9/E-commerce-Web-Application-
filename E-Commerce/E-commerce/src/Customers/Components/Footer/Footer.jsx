import React from "react";
import { Grid, Typography, Button } from "@mui/material";

export default function Footer() {
    return (
        <div>
            <Grid container className="bg-black text-white text-center mt-10" sx={{ bgcolor: "black", color: "white", py: 3 }}>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className="pb-5" variant="h6">Company</Typography>
                    <div>
                        <Button className="pb-5" variant="text" gutterButtom>About</Button>
                    </div>
                    <div>
                        <Button className="pb-5" variant="text" gutterButtom>Blog</Button>
                    </div>
                    <div>
                        <Button className="pb-5" variant="text" gutterButtom>Careers</Button>
                    </div>
                    <div>
                        <Button className="pb-5" variant="text" gutterButtom>Press</Button>
                    </div>
                    <div>
                        <Button className="pb-5" variant="text" gutterButtom>Partners</Button>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className="pb-5" variant="h6">Solutions</Typography>
                    <div>
                        <Button className="pb-5" variant="text" gutterButtom>Marketing</Button>
                    </div>
                    <div>
                        <Button className="pb-5" variant="text" gutterButtom>Analytics</Button>
                    </div>
                    <div>
                        <Button className="pb-5" variant="text" gutterButtom>Commerce</Button>
                    </div>
                    <div>
                        <Button className="pb-5" variant="text" gutterButtom>Insights</Button>
                    </div>
                    <div>
                        <Button className="pb-5" variant="text" gutterButtom>Support</Button>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className="pb-5" variant="h6">Documentation</Typography>
                    <div>
                        <Button className="pb-5" variant="text" gutterButtom>Guides</Button>
                    </div>
                    <div>
                        <Button className="pb-5" variant="text" gutterButtom>API Status</Button>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className="pb-5" variant="h6">Legal</Typography>
                    <div>
                        <Button className="pb-5" variant="text" gutterButtom>Claim</Button>
                    </div>
                    <div>
                        <Button className="pb-5" variant="text" gutterButtom>Privacy</Button>
                    </div>
                    <div>
                        <Button className="pb-5" variant="text" gutterButtom>Terms</Button>
                    </div>
                </Grid>
                <Grid className="pt-20" item xs={12}>
                    <Typography variant="body2" component="p" align="center">
                        ©️2024 Our Company. All rights reserved.
                    </Typography>
                    <Typography variant="body2" component="p" align="center">
                        <i>A Company by KVP</i>
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
}
