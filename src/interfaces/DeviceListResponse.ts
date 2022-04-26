import { Device } from "#/domain/Device";
import { AxiosResponse } from "axios";

export type TDeviceListResponse = {
  statusCode: number;
  body: {
    deviceList: Device[];
    infraredRemoteList: any[];
  };
  message: "success" | "error";
};

export interface IDeviceListResponse extends AxiosResponse {
  data: TDeviceListResponse;
}
