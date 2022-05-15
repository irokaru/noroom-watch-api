import dotenv from "dotenv";

import { fetchWeather } from "#/infrastructure/Tsukumijima";

dotenv.config();

describe("fetchWeather", () => {
  test("天気が取得できるか", async () => {
    const weatherCode = process.env.JMA_WEATHER_CODE;

    const result = await fetchWeather(weatherCode);
    if (!("error" in result.data)) expect(result.data.publicTime).toBeTruthy();
  });

  test("地域が不正な場合はエラーが返るか", async () => {
    const result = await fetchWeather("123");
    if ("error" in result.data)
      expect(result.data.error).toEqual("The specified city ID is invalid.");
  });
});
