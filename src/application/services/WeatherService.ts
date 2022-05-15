import { createWeather, Weather } from "#/domain/Weather";
import { fetchWeather } from "#/infrastructure/Tsukumijima";

export const getWeather = async (
  code: string
): Promise<Weather | undefined> => {
  try {
    const res = await fetchWeather(code);

    if ("error" in res.data) throw new Error("has error");

    return createWeather(res.data);
  } catch (_) {
    return undefined;
  }
};
