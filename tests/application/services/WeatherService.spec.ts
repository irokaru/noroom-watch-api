import { getWeather } from "#/application/services/WeatherService";
import { createWeather } from "#/domain/Weather";
import { fetchWeather } from "#/infrastructure/Tsukumijima";
import { dummyWeatherParams } from "../../__dummy__/weather";

jest.mock("#/infrastructure/Tsukumijima");

const dummyWeather = createWeather(dummyWeatherParams);

describe("fetchWeather", () => {
  test("天気が取得できるか", async () => {
    (fetchWeather as jest.Mock).mockImplementation(() =>
      Promise.resolve({ data: dummyWeather })
    );

    const result = await getWeather("dummy");
    expect(result.publicTime).toBeTruthy;
  });

  test("エラーレスポンス時にundefinedになるか", async () => {
    (fetchWeather as jest.Mock).mockImplementation(() => {
      Promise.resolve({ error: "this is error" });
    });

    const result = await getWeather("dummy");
    expect(result).toBeUndefined();
  });

  test("通信エラー時にundefinedになるか", async () => {
    (fetchWeather as jest.Mock).mockImplementation(() =>
      Promise.reject({ cod: 401 })
    );

    const result = await getWeather("dummy");
    expect(result).toBeUndefined();
  });
});
