import { AxiosResponse } from "axios";

export type TDeviceStatusResponse = {
  statusCode: number;
  body: {
    deviceId: string;
    deviceType: string;
    hubDeviceId: string;
    [key: string]: any;
  };
  message: string;
};

export interface IDeviceStatusResponse extends AxiosResponse {
  data: TDeviceStatusResponse;
}
