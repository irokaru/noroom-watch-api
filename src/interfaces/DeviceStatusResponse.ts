import { IDeviceValueType } from "#/domain/Device";
import { IMeterValueType } from "#/domain/Meter";
import { AxiosResponse } from "axios";

export type TDeviceStatusBody<T = any> = IDeviceValueType & T;

export type TMeterStatusBody = TDeviceStatusBody<IMeterValueType>;

export type TDeviceStatusResponse<T = TDeviceStatusBody> = {
  statusCode: number;
  body: T;
  message: string;
};

export type TMeterDeviceStatusResponse =
  TDeviceStatusResponse<TMeterStatusBody>;

export type IDeviceStatusResponse<T = TDeviceStatusResponse> = AxiosResponse<T>;
