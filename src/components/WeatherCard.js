import React from "react";
import moment from "moment";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { WiCloud } from "react-icons/wi";
import { WiThunderstorm } from "react-icons/wi";
import { WiRainMix } from "react-icons/wi";
import { WiRain } from "react-icons/wi";
import { WiSnowflakeCold } from "react-icons/wi";
import { WiCloudy } from "react-icons/wi";
import { WiDaySunny } from "react-icons/wi";
import { IconContext } from "react-icons";

function WeatherCard({ i, name, weather, main, temp }) {
  const WeatherIcon = (weatherDesc) => {
    switch (weatherDesc) {
      case "Thunderstorm":
        return <WiThunderstorm />;
      case "Drizzle":
        return <WiRainMix />;
      case "Rain":
        return <WiRain />;
      case "Snow":
        return <WiSnowflakeCold />;
      case "Clouds":
        return <WiCloudy />;
      case "Clear":
        return <WiDaySunny />;
      default:
        return <WiCloud />;
    }
  };
  const tommorow = moment().add(i, "days").weekday();
  const dayOfWeekFull = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return (
    <Card variant="outlined">
      {name && <CardHeader title={name} />}
      <CardContent>
        <Typography variant="h2">
          <IconContext.Provider value={{}}>
            {WeatherIcon(weather[0].main)}
          </IconContext.Provider>
        </Typography>
        <Typography variant="h5">
          {temp ? Math.round(temp.day) : Math.round(main.temp)}&deg;C
        </Typography>
      </CardContent>
      <Typography variant="subtitle1">
        <CardActions>{name ? "Today" : dayOfWeekFull[tommorow]}</CardActions>
      </Typography>
    </Card>
  );
}

export default WeatherCard;
