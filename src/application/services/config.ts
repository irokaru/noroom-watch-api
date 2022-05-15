import dotenv from "dotenv";

dotenv.config();

export const configSwitchbot = {
  token: process.env.SWITCHBOT_TOKEN,
  meterDeviceName: process.env.SWITCHBOT_METER_DEVICE_NAME,
};

export const configWeather = {
  appKey: process.env.WEATHEROPENMAP_APP_KEY,
  area: process.env.WEATHEROPENMAP_AREA,
  code: process.env.JMA_WEATHER_CODE,
};
