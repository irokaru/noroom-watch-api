import { createWeather, IWeatherValueType } from "#/domain/Weather";
import { dummyWeatherParams } from "../__dummy__/weather";

const createDummyWithTemperature = (
  temperatures: [string | null, string | null][]
): IWeatherValueType => {
  const p = Object.assign({}, dummyWeatherParams);

  for (let idx = 0; idx < p.forecasts.length; idx++) {
    p.forecasts[idx].temperature.min.celsius = temperatures[idx][0];
    p.forecasts[idx].temperature.min.fahrenheit = temperatures[idx][0];
    p.forecasts[idx].temperature.max.celsius = temperatures[idx][1];
    p.forecasts[idx].temperature.max.fahrenheit = temperatures[idx][1];
  }
  return p;
};

const createDummyWithWeather = (weather: string[]): IWeatherValueType => {
  const p = Object.assign({}, dummyWeatherParams);

  for (let idx = 0; idx < p.forecasts.length; idx++) {
    p.forecasts[idx].telop = weather[idx];
  }

  return p;
};

describe("Weather", () => {
  test("Weatherが生成されるか", () => {
    const result = createWeather(dummyWeatherParams);
    expect(dummyWeatherParams).toEqual(result.getJson());
  });

  test("最新の気温が取得できるか", () => {
    const suites: [number, number, [string | null, string | null][]][] = [
      [
        0,
        0,
        [
          [null, null],
          [null, null],
          [null, null],
        ],
      ],
      [
        1,
        2,
        [
          ["1", "2"],
          [null, null],
          [null, null],
        ],
      ],
      [
        3,
        4,
        [
          [null, null],
          ["3", "4"],
          [null, null],
        ],
      ],
      [
        5,
        6,
        [
          [null, null],
          [null, null],
          ["5", "6"],
        ],
      ],
      [
        7,
        8,
        [
          ["7", "8"],
          ["9", "10"],
          [null, null],
        ],
      ],
      [
        7,
        8,
        [
          ["7", "8"],
          ["9", "10"],
          ["11", "12"],
        ],
      ],
    ];

    for (const [expectMin, expectMax, temperatures] of suites) {
      const p = createDummyWithTemperature(temperatures);
      const weather = createWeather(p);
      expect(weather.getLatestCelsiusTemperatureMin()).toEqual(expectMin);
      expect(weather.getLatestCelsiusTemperatureMax()).toEqual(expectMax);
    }
  });

  test("簡易的な天気が取得できるか", () => {
    const suites: [string, string[]][] = [
      ["晴", ["晴れのち曇り", "雪", "雨"]],
      ["雪", ["雪", "雨", "晴れのち曇り"]],
      ["雨", ["雨", "晴れのち曇り", "雪"]],
    ];
    for (const [expectWeather, weathers] of suites) {
      const p = createDummyWithWeather(weathers);
      const weather = createWeather(p);
      expect(weather.getSimpleWeather()).toEqual(expectWeather);
    }
  });
});
