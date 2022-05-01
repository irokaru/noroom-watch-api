import { IBase } from "./Base";

export type TWeatherCoord = {
  lon: number;
  lat: number;
};

export type TWeather = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

export type TWeatherMain = {
  temp: number;
  temp_min: number;
  temp_max: number;
  humidity: number;
};

export type TWeatherWind = {
  speed: number;
  deg: number;
  gust: number;
};

export type TWeatherClouds = {
  all: number;
};

export type TWeatherSys = {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
};

export interface IWeatherValueType {
  coord: TWeatherCoord;
  weather: TWeather[];
  base: string;
  main: TWeatherMain;
  visibility: string;
  wind: TWeatherWind;
  clouds: TWeatherClouds;
  dt: number;
  sys: TWeatherSys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export class Weather implements IBase {
  readonly coord: TWeatherCoord;
  readonly weather: TWeather[];
  readonly base: string;
  readonly main: TWeatherMain;
  readonly visibility: string;
  readonly wind: TWeatherWind;
  readonly clouds: TWeatherClouds;
  readonly dt: number;
  readonly sys: TWeatherSys;
  readonly timezone: number;
  readonly id: number;
  readonly name: string;
  readonly cod: number;

  constructor(init: Partial<Weather>) {
    Object.assign(this, init);
  }

  getJson(): IWeatherValueType {
    return {
      coord: this.coord,
      weather: this.weather,
      base: this.base,
      main: this.main,
      visibility: this.visibility,
      wind: this.wind,
      clouds: this.clouds,
      dt: this.dt,
      sys: this.sys,
      timezone: this.timezone,
      id: this.id,
      name: this.name,
      cod: this.cod,
    };
  }

  getWeatherIconUrl(size = 4): string {
    return `http://openweathermap.org/img/wn/${this.weather[0].icon}@${size}x.png`;
  }
}

export const createWeather = (init?: Partial<Weather>): Weather => {
  return new Weather(init);
};
