import bodyParser from "body-parser";
import cors from "cors";
import express from "express";

import { configSwitchbot, configWeather } from "./application/services/config";
import {
  findOneDeviceByName,
  getMeterDeviceStatus,
} from "./application/services/DeviceService";
import { getWeather } from "./application/services/WeatherService";

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get("/api/room", async (req, res) => {
  const meter = await findOneDeviceByName(
    configSwitchbot.token,
    configSwitchbot.meterDeviceName
  );
  const meterStatus = await getMeterDeviceStatus(configSwitchbot.token, meter);

  if (!meterStatus) {
    res.send({ status: "error" });
    return;
  }

  res.send({
    status: "success",
    temperature: meterStatus.temperature,
    humidity: meterStatus.humidity,
  });
});

app.get("/api/weather", async (req, res) => {
  const weather = await getWeather(configWeather.appKey, configWeather.area);
  if (!weather) {
    res.send({ status: "error" });
    return;
  }

  res.send({
    status: "success",
    weather: weather.weather[0].main,
    temp: weather.calcTempKelvintoC(),
    temp_max: weather.calcTempMaxKelvintoC(),
    temp_min: weather.calcTempMinKelvintoC(),
    icon: weather.getWeatherIconUrl(),
  });
});

export default app;