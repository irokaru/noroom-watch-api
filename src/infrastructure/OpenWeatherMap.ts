import { IWeatherResponse } from "#/interfaces/WeatherResponse";
import axios from "axios";

const ENDPOINT = "http://api.openweathermap.org/data/2.5/weather";

export const fetchWeather = (
  appKey: string,
  area: string
): Promise<IWeatherResponse> => {
  return axios.get(`${ENDPOINT}?APPID=${appKey}&q=${area}`);
};
