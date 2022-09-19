import { Card, Stack, Grid, TextField, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

function AdminDashboardPage() {
  return (
    <Stack
      justifyContent="center"
      alignItems={"center"}
      sx={{ bgcolor: "whitesmoke" }}
    >
      <Typography>ADMIN DASHBOARD</Typography>
      <br />
      <br />
      <br />
      <Grid container maxWidth={"sm"} spacing={2}>
        <Grid item xs={6}>
          <Link href={"/admin/editor"}>
            <Card sx={{ height: 100 }}>Editor</Card>
          </Link>
        </Grid>
        <Grid item xs={6}>
          <Card sx={{ height: 100 }}>Assets</Card>
        </Grid>
        <Grid item xs={6}>
          <Card sx={{ height: 100 }}>Pages</Card>
        </Grid>
        <Grid item xs={6}>
          <Card sx={{ height: 100 }}>System</Card>
        </Grid>
      </Grid>
    </Stack>
  );
}

export default AdminDashboardPage;
