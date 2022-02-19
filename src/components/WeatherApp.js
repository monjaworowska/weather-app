import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Alert from "@mui/material/Alert";
import EnterLocationForm from "./EnterLocationForm";

const WEATHER_API_URL = "http://api.openweathermap.org/data/2.5";
const GEO_API_URL = "http://api.openweathermap.org/geo/1.0/direct?q=";
const API_KEY = "6a175ae0557a7f1a5308f4eaf4f1063f";

function WeatherApp() {
  const [location, setLocation] = useState();
  const [showAlert, setShowAlert] = useState(false);
  const formSubmitFn = (e, location) => {
    e.preventDefault();
    setLocation(location);
  };
  return (
    <Container maxWidth="md">
      {console.log(location)}
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <EnterLocationForm submitFn={formSubmitFn} />
        </Grid>
        <Grid item xs={12}>
          {showAlert && <Alert severity="error">Enter a valid city name</Alert>}
        </Grid>
        <Grid item xs={12} md={6}>
          <Card variant="outlined">2</Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card variant="outlined">3</Card>
        </Grid>
        <Grid container item spacing={3}>
          <Grid item xs={12} md={3}>
            <Card variant="outlined">4</Card>
          </Grid>
          <Grid item xs={12} md={3}>
            <Card variant="outlined">5</Card>
          </Grid>
          <Grid item xs={12} md={3}>
            <Card variant="outlined">6</Card>
          </Grid>
          <Grid item xs={12} md={3}>
            <Card variant="outlined">6</Card>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default WeatherApp;
