import { createWeather, TWeather, Weather } from "#/domain/Weather";

describe("Weather", () => {
  test("Weatherが生成されるか", () => {
    const params = {
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
    };

    const result = createWeather(params);
    expect(params).toEqual(result.getJson());
  });

  test("天気のアイコンURLが生成されるか", () => {
    const dummyTWeather = (icon: string): TWeather => {
      return {
        id: 0,
        main: "dummy",
        description: "dummy",
        icon,
      };
    };
    const suites: [string, Partial<Weather>, number][] = [
      [
        "http://openweathermap.org/img/wn/ddd@1x.png",
        { weather: [dummyTWeather("ddd")] },
        1,
      ],
      [
        "http://openweathermap.org/img/wn/d01@2x.png",
        { weather: [dummyTWeather("d01")] },
        2,
      ],
      [
        "http://openweathermap.org/img/wn/d01@2x.png",
        { weather: [dummyTWeather("d01"), dummyTWeather("d02")] },
        2,
      ],
      [
        "http://openweathermap.org/img/wn/d01@4x.png",
        { weather: [dummyTWeather("d01"), dummyTWeather("d02")] },
        undefined,
      ],
    ];

    for (const suite of suites) {
      const weather = createWeather(suite[1]);
      expect(suite[0]).toEqual(weather.getWeatherIconUrl(suite[2]));
    }
  });
});
