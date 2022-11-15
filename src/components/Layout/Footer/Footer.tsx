import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import logo from "../../../assets/images/amber-logo.png";

function Copyright() {
  return (
    <Typography variant="body2" color="white" align="center">
      {"Copyright © "}
      <Link color="inherit" sx={{ textDecoration: "none" }}>
        2019 Dentmasters Dental Clinic | All Rights Reserved.
      </Link>
      {"."}
    </Typography>
  );
}

export default function Footer() {
  const title = "Footer";
  const description = "Something here to give the footer a purpose!";

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "primary.main",
        py: 6,
        flexGrow: 1,
        bottom: "0",
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{
          maxWidth: "100%",
          margin: "auto",
        }}
      >
        <Grid item xs={4}>
          <Typography
            variant="subtitle1"
            align="center"
            component="p"
            color="white"
          >
            Kişisel Veri İzleme Politikası
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <Copyright />
        </Grid>
      </Grid>
    </Box>
  );
}
