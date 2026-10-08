
import SearchBox from "./searchbox";
import InfoBox from "./Infobox";
import { useState } from "react";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feels_like: 29.5,
    temp: 30.2,
    temp_min: 28.0,
    temp_max: 32.0,
    humidity: 45,
    description: "haze",
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <>
      <SearchBox updateInfo={updateInfo} />

      <br />
      <br />

      <InfoBox weather={weatherInfo} />
    </>
  );
}

