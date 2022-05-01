import { AxiosResponse } from "axios";

export type TDeviceStatusBody = {
  deviceId: string;
  deviceType: string;
  hubDeviceId: string;
  [key: string]: any;
};

export type TMeterStatusBody = {
  deviceId: string;
  deviceType: string;
  hubDeviceId: string;
  temperature: number;
  humidity: number;
  [key: string]: any;
};

export type TDeviceStatusResponse = {
  statusCode: number;
  body: TDeviceStatusBody;
  message: string;
};

export type TMeterDeviceStatusResponse = {
  statusCode: number;
  body: TMeterStatusBody;
  message: string;
};

export type IDeviceStatusResponse<T = TDeviceStatusResponse> = AxiosResponse<T>
