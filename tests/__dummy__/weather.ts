import { IWeatherValueType } from "#/domain/Weather";

export const dummyWeatherParams: IWeatherValueType = {
  publicTime: "2021-03-03T05:00:00+09:00",
  publicTimeFormatted: "2021/03/03 05:00:00",
  publishingOffice: "福岡管区気象台",
  title: "福岡県 久留米 の天気",
  link: "https://www.jma.go.jp/bosai/forecast/#area_type=offices&area_code=400000",
  description: {
    publicTime: "2021-03-03T04:43:00+09:00",
    publicTimeFormatted: "2021/03/03 04:43:00",
    headlineText:
      "福岡、北九州地方では、３日夕方まで高波に注意してください。福岡県では、４日まで空気の乾燥した状態が続くため、火の取り扱いに注意してください。",
    bodyText:
      "　福岡県は、寒気の影響により曇りとなっている所がありますが、高気圧に覆われて概ね晴れています。\n\n　３日は、寒気の影響によりはじめ曇りとなる所がありますが、高気圧に覆われて概ね晴れとなるでしょう。\n\n　４日は、高気圧に覆われて晴れとなる所もありますが、気圧の谷や湿った空気の影響により概ね曇りで、夜遅くは雨となるでしょう。",
    text: "福岡、北九州地方では、３日夕方まで高波に注意してください。福岡県では、４日まで空気の乾燥した状態が続くため、火の取り扱いに注意してください。\n\n　福岡県は、寒気の影響により曇りとなっている所がありますが、高気圧に覆われて概ね晴れています。\n\n　３日は、寒気の影響によりはじめ曇りとなる所がありますが、高気圧に覆われて概ね晴れとなるでしょう。\n\n　４日は、高気圧に覆われて晴れとなる所もありますが、気圧の谷や湿った空気の影響により概ね曇りで、夜遅くは雨となるでしょう。",
  },
  forecasts: [
    {
      date: "2021-03-03",
      dateLabel: "今日",
      telop: "晴れ",
      detail: {
        weather: "晴れ",
        wind: "北の風",
        wave: "０．５メートル",
      },
      temperature: {
        min: {
          celsius: null,
          fahrenheit: null,
        },
        max: {
          celsius: "14",
          fahrenheit: "57.2",
        },
      },
      chanceOfRain: {
        T00_06: "--%",
        T06_12: "0%",
        T12_18: "0%",
        T18_24: "0%",
      },
      image: {
        title: "晴れ",
        url: "https://www.jma.go.jp/bosai/forecast/img/100.svg",
        width: 80,
        height: 60,
      },
    },
    {
      date: "2021-03-04",
      dateLabel: "明日",
      telop: "曇のち一時雨",
      detail: {
        weather: "くもり　時々　晴れ　夜遅く　雨",
        wind: "北の風　後　北東の風",
        wave: "０．５メートル",
      },
      temperature: {
        min: {
          celsius: "4",
          fahrenheit: "39.2",
        },
        max: {
          celsius: "18",
          fahrenheit: "64.4",
        },
      },
      chanceOfRain: {
        T00_06: "10%",
        T06_12: "10%",
        T12_18: "20%",
        T18_24: "60%",
      },
      image: {
        title: "曇のち一時雨",
        url: "https://www.jma.go.jp/bosai/forecast/img/212.svg",
        width: 80,
        height: 60,
      },
    },
    {
      date: "2021-03-05",
      dateLabel: "明後日",
      telop: "雨のち曇",
      detail: {
        weather: null,
        wind: null,
        wave: null,
      },
      temperature: {
        min: {
          celsius: "10",
          fahrenheit: "50",
        },
        max: {
          celsius: "20",
          fahrenheit: "68",
        },
      },
      chanceOfRain: {
        T00_06: "70%",
        T06_12: "70%",
        T12_18: "70%",
        T18_24: "70%",
      },
      image: {
        title: "雨のち曇",
        url: "https://www.jma.go.jp/bosai/forecast/img/313.svg",
        width: 80,
        height: 60,
      },
    },
  ],
  location: {
    area: "九州",
    prefecture: "福岡県",
    district: "筑後地方",
    city: "久留米",
  },
  copyright: {
    title: "(C) 天気予報 API（livedoor 天気互換）",
    link: "https://weather.tsukumijima.net/",
    image: {
      title: "天気予報 API（livedoor 天気互換）",
      link: "https://weather.tsukumijima.net/",
      url: "https://weather.tsukumijima.net/logo.png",
      width: 120,
      height: 120,
    },
    provider: [
      {
        link: "https://www.jma.go.jp/jma/",
        name: "気象庁 Japan Meteorological Agency",
        note: "気象庁 HP にて配信されている天気予報を JSON データへ編集しています。",
      },
    ],
  },
};
