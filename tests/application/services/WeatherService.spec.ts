import { getWeather } from "#/application/services/WeatherService";
import { createWeather } from "#/domain/Weather";
import { fetchWeather } from "#/infrastructure/OpenWeatherMap";

jest.mock("#/infrastructure/OpenWeatherMap");

const dummyWeather = createWeather({
  coord: {
    lon: 139.6917,
    lat: 35.6895,
  },
  weather: [
    {
      id: 500,
      main: "Rain",
      description: "light rain",
      icon: "10d",
    },
  ],
  base: "stations",
  main: {
    temp: 284.96,
    temp_min: 283.48,
    temp_max: 287.34,
    humidity: 93,
  },
  wind: {
    speed: 6.69,
    deg: 360,
    gust: 100,
  },
  clouds: {
    all: 75,
  },
  dt: 1651394705,
  sys: {
    type: 2,
    id: 2038398,
    country: "JP",
    sunrise: 1651348186,
    sunset: 1651397210,
  },
  timezone: 32400,
  id: 1850144,
  name: "Tokyo",
  cod: 200,
});

describe("fetchWeather", () => {
  test("天気が取得できるか", async () => {
    (fetchWeather as jest.Mock).mockImplementation(() =>
      Promise.resolve({ data: dummyWeather })
    );

    const result = await getWeather("dummy", "Tokyo");
    expect(result.cod).toEqual(200);
  });

  test("エラー時にundefinedになるか", async () => {
    (fetchWeather as jest.Mock).mockImplementation(() =>
      Promise.reject({ cod: 401 })
    );

    const result = await getWeather("dummy", "Tokyo");
    expect(result).toBeUndefined();
  });
});
