import { IWeatherValueType } from "#/domain/Weather";
import { AxiosResponse } from "axios";

export type IWeatherResponse = AxiosResponse<IWeatherValueType>;

export type IWeatherErrorResponse = AxiosResponse<{ error: string }>;
