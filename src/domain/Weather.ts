import { IBase } from "./Base";

export type TWeatherDescription = {
  publicTime: string;
  publicTimeFormatted: string;
  headlineText: string;
  bodyText: string;
  text: string;
};

export type TWeatherForecast = {
  date: string;
  dateLabel: string;
  telop: string;
  detail: TWeatherForecastDetail;
  temperature: TWeatherForecastTempareture;
  chanceOfRain: TWeatherForecastChanceOfRain;
  image: TWeatherForecastImage;
};

export type TWeatherForecastDetail = {
  weather: string | null;
  wind: string | null;
  wave: string | null;
};

export type TWeatherForecastTempareture = {
  max: {
    celsius: string | null;
    fahrenheit: string | null;
  };
  min: {
    celsius: string | null;
    fahrenheit: string | null;
  };
};

export type TWeatherForecastChanceOfRain = {
  T00_06: string;
  T06_12: string;
  T12_18: string;
  T18_24: string;
};

export type TWeatherForecastImage = {
  title: string;
  url: string;
  width: number;
  height: number;
};

export type TWeatherLocation = {
  area: string;
  prefecture: string;
  district: string;
  city: string;
};

export type TWeatherCopyright = {
  title: string;
  link: string;
  image: {
    title: string;
    link: string;
    url: string;
    width: number;
    height: number;
  };
  provider: {
    link: string;
    name: string;
    note: string;
  }[];
};

export interface IWeatherValueType {
  publicTime: string;
  publicTimeFormatted: string;
  publishingOffice: string;
  title: string;
  link: string;
  description: TWeatherDescription;
  forecasts: TWeatherForecast[];
  location: TWeatherLocation;
  copyright: TWeatherCopyright;
}

export class Weather implements IBase {
  readonly publicTime: string;
  readonly publicTimeFormatted: string;
  readonly publishingOffice: string;
  readonly title: string;
  readonly link: string;
  readonly description: TWeatherDescription;
  readonly forecasts: TWeatherForecast[];
  readonly location: TWeatherLocation;
  readonly copyright: TWeatherCopyright;

  constructor(init: Partial<Weather>) {
    Object.assign(this, init);
  }

  getJson(): IWeatherValueType {
    return {
      publicTime: this.publicTime,
      publicTimeFormatted: this.publicTimeFormatted,
      publishingOffice: this.publishingOffice,
      title: this.title,
      link: this.link,
      description: this.description,
      forecasts: this.forecasts,
      location: this.location,
      copyright: this.copyright,
    };
  }

  getLatestCelsiusTemperatureMin(): number {
    for (const forecast of this.forecasts) {
      const min = forecast.temperature.min.celsius;
      if (min) return Number(min);
    }

    return 0;
  }

  getLatestCelsiusTemperatureMax(): number {
    for (const forecast of this.forecasts) {
      const min = forecast.temperature.max.celsius;
      if (min) return Number(min);
    }

    return 0;
  }

  getSimpleWeather(): string {
    return this.forecasts[0].telop[0];
  }
}

export const createWeather = (init?: Partial<Weather>): Weather => {
  return new Weather(init);
};
