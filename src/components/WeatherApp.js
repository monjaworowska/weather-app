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
  const [coords, setCoords] = useState();
  const [todayWeather, setTodayWeather] = useState();
  const [weatherForecast, setWeatherForecast] = useState();

  const formSubmitFn = (e, location) => {
    e.preventDefault();
    setLocation(location);
  };

  useEffect(() => {
    !location
      ? // Get the user's current coordinates
        navigator.geolocation.getCurrentPosition((position) => {
          if (position && position.coords) {
            setCoords(position.coords);
          }
        })
      : // Fetch coordinates of the city entered by the user
        fetch(`${GEO_API_URL}${location}&limit=1&appid=${API_KEY}`)
          .then((res) => {
            if (!res.ok) {
              throw new Error();
            }
            setShowAlert(false);
            return res.json();
          })
          .then((result) =>
            setCoords({ latitude: result[0].lat, longitude: result[0].lon })
          )
          .catch((error) => {
            setShowAlert(true);
            console.log(error);
          });
  }, [location]);

  useEffect(() => {
    if (!coords) {
      return;
    }
    //Fetch today weather data
    fetch(
      `${WEATHER_API_URL}/weather?lat=${coords.latitude}&lon=${coords.longitude}&units=metric&APPID=${API_KEY}`
    )
      .then((res) => res.json())
      .then((result) => {
        setTodayWeather(result);
      });

    //Fetch weather forecast
    fetch(
      `${WEATHER_API_URL}/onecall?lat=${coords.latitude}&lon=${coords.longitude}&exclude=current,minutely,hourly,alerts&units=metric&APPID=${API_KEY}`
    )
      .then((res) => res.json())
      .then((result) => {
        setWeatherForecast(result.daily.slice(0, 4));
      });
  }, [coords]);

  return (
    <Container maxWidth="md">
      {console.log(todayWeather)}
      {console.log(weatherForecast)}
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
