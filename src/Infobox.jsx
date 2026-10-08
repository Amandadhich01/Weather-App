import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import "./Infobox.css";

export default function InfoBox({ weather }) {
  const HOT_URL =
    "https://images.unsplash.com/photo-1504370805625-d32c54b16100?q=80&w=600&auto=format&fit=crop";
  const COLD_URL =
    "https://images.unsplash.com/photo-1612208695882-08f2322b7527?q=80&w=600&auto=format&fit=crop";
  const RAIN_URL =
    "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?q=80&w=600&auto=format&fit=crop";

  const isRain = weather.humidity > 80;
  const isHot = weather.temp > 15;

  return (
    <div>
      <div className="InfoBox">
        <Card sx={{ maxWidth: 345, width: "100%", boxShadow: 3, borderRadius: 2 }}>
          <CardMedia
            sx={{ height: 160 }}
            image={isRain ? RAIN_URL : isHot ? HOT_URL : COLD_URL}
            title={weather.city}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 1 }}
            >
              {weather.city}
              {isRain ? (
                <ThunderstormIcon color="primary" />
              ) : isHot ? (
                <WbSunnyIcon sx={{ color: "#ff9800" }} />
              ) : (
                <AcUnitIcon sx={{ color: "#00bcd4" }} />
              )}
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
              component="div"
              sx={{ lineHeight: 1.8 }}
            >
              <p style={{ margin: "4px 0" }}>Temperature = <b>{weather.temp}&deg;C</b></p>
              <p style={{ margin: "4px 0" }}>Humidity = <b>{weather.humidity}%</b></p>
              <p style={{ margin: "4px 0" }}>Min Temp = <b>{weather.temp_min}&deg;C</b></p>
              <p style={{ margin: "4px 0" }}>Max Temp = <b>{weather.temp_max}&deg;C</b></p>
              <p style={{ margin: "8px 0 0 0", fontStyle: "italic" }}>
                The weather can be described as <i>{weather.description}</i> and feels like {weather.feels_like}&deg;C.
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}