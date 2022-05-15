import {
  IWeatherErrorResponse,
  IWeatherResponse,
} from "#/interfaces/WeatherResponse";
import axios from "axios";
import { setupCache } from "axios-cache-adapter";

const ENDPOINT = "https://weather.tsukumijima.net/api/forecast/city";

export const fetchWeather = (
  code: number | string,
  cacheSec = 0
): Promise<IWeatherResponse | IWeatherErrorResponse> => {
  const cache = setupCache({ maxAge: cacheSec });

  return axios.get(`${ENDPOINT}/${code}`, {
    adapter: cache.adapter,
  });
};
