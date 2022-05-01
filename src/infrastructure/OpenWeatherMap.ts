import { IWeatherResponse } from "#/interfaces/WeatherResponse";
import axios from "axios";
import { setupCache } from "axios-cache-adapter";

const ENDPOINT = "http://api.openweathermap.org/data/2.5/weather";

export const fetchWeather = (
  appKey: string,
  area: string,
  cacheSec = 0
): Promise<IWeatherResponse> => {
  const cache = setupCache({ maxAge: cacheSec });

  return axios.get(`${ENDPOINT}?APPID=${appKey}&q=${area}`, {
    adapter: cache.adapter,
  });
};
