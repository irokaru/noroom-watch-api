# noroom watch ui

自室の情報と天気予報を提供してくれるやつ。

## 環境

* node 16.14.x
* npm 8.8.x


## 利用サービス

* [OpenWeatherMap](https://openweathermap.org/)
* [SwitchBot](https://www.switchbot.jp/)

## 必要なこと

```bash
# 環境変数のファイルを作成する
cp .env.sample .env

# 各種環境変数を書き込む
vi .env
```

## 各種コマンド

```bash
# install
npm i --legacy-peer-deps

# run test
npm test

# run test with coverage
npm run test:coverage
```
