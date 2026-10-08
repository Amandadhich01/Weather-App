
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function SearchBox({ updateInfo }) {
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "adc5b89fcd92c254dfd220ac2560e8e7";

  let [city, setCity] = useState("");
  let [error, setError] = useState(false);

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );

      let jsonResponse = await response.json();

      if (jsonResponse.cod && jsonResponse.cod != 200) {
        throw new Error(jsonResponse.message || "City not found");
      }

      let weather = {
        city: jsonResponse.name,
        temp: jsonResponse.main.temp,
        temp_min: jsonResponse.main.temp_min,
        temp_max: jsonResponse.main.temp_max,
        feels_like: jsonResponse.main.feels_like,
        description: jsonResponse.weather[0].description,
        humidity: jsonResponse.main.humidity,
      };

      return weather;
    } catch (err) {
      throw err;
    }
  };

  let handleChange = (event) => {
    setCity(event.target.value);
    if (error) setError(false);
  };

  let handleSubmit = async (event) => {
    try {
      event.preventDefault();
      let info = await getWeatherInfo();
      updateInfo(info);
      setCity("");
      setError(false);
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />

        <br />
        <br />

        <Button variant="contained" type="submit">
          Search
        </Button>

        {error && (
          <p style={{ color: "#d32f2f", marginTop: "12px", fontWeight: "bold" }}>
            No such place in our API!
          </p>
        )}
      </form>
    </div>
  );
}

export default SearchBox;

