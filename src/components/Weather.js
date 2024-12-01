import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Card,
  CardContent,
  Typography,
  CircularProgress,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [city, setCity] = useState("London");

  // List of major European cities
  const cities = [
    "London",
    "Paris",
    "Berlin",
    "Rome",
    "Madrid",
    "Vienna",
    "Amsterdam",
    "Brussels",
    "Dublin",
    "Zurich",
  ];

  const apiKey =  process.env.NEXT_PUBLIC_WEATHER_API_KEY; // Replace with your API key

  const fetchWeatherData = (selectedCity) => {
    setLoading(true);
    setError(null);
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=${apiKey}&units=metric`
      )
      .then((response) => {
        setWeatherData(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Unable to fetch weather data.");
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchWeatherData(city);
  }, [city]);

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  if (loading) return <CircularProgress />;
  if (error)
    return (
      <Typography color="error" variant="body2">
        {error}
      </Typography>
    );

  return (
    <Card sx={{ width: 350, borderRadius: 2, boxShadow: 3, marginBottom: 2 }}>
      <CardContent>
        <FormControl fullWidth sx={{ marginBottom: 2 }}>
          <InputLabel>Select City</InputLabel>
          <Select value={city} onChange={handleCityChange}>
            {cities.map((city) => (
              <MenuItem key={city} value={city}>
                {city}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Typography variant="h6">{weatherData.name}</Typography>
        <Typography variant="body1">
          {weatherData.weather[0].description.charAt(0).toUpperCase() +
            weatherData.weather[0].description.slice(1)}
        </Typography>
        <Typography variant="h4">{weatherData.main.temp}°C</Typography>
        <Typography variant="body2">
          Humidity: {weatherData.main.humidity}%
        </Typography>
        <Typography variant="body2">
          Wind Speed: {weatherData.wind.speed} m/s
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Weather;
