import { IWeatherValueType } from "#/domain/Weather";
import { AxiosResponse } from "axios";

export type IWeatherResponse = AxiosResponse<IWeatherValueType>;
