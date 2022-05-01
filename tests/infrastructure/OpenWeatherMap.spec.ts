import { fetchWeather } from "#/infrastructure/OpenWeatherMap";
import dotenv from "dotenv";

dotenv.config();

describe("fetchWeather", () => {
  test("天気が取得できるか", async () => {
    const appKey = process.env.WEATHEROPENMAP_APP_KEY;
    const area = "Tokyo";

    const result = await fetchWeather(appKey, area);
    expect(result.data.cod).toEqual(200);
  });

  test("地域が不正な場合は404が返るか", async () => {
    try {
      const appKey = process.env.WEATHEROPENMAP_APP_KEY;

      await fetchWeather(appKey, "myhome");
    } catch (e) {
      expect(e.response.status).toEqual(404);
    }
  });

  test("APPキーが不正だった場合は401が返るか", async () => {
    try {
      await fetchWeather("", "Tokyo");
    } catch (e) {
      expect(e.response.status).toEqual(401);
    }
  });
});
