import { createWeather, Weather } from "#/domain/Weather";
import { fetchWeather } from "#/infrastructure/OpenWeatherMap";

export const getWeather = async (
  appkey: string,
  area: string
): Promise<Weather | undefined> => {
  try {
    const res = await fetchWeather(appkey, area);

    return createWeather(res.data);
  } catch (_) {
    return undefined;
  }
};
