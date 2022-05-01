import { Device } from "#/domain/Device";
import { IDeviceListResponse } from "#/interfaces/DeviceListResponse";
import { IDeviceStatusResponse } from "#/interfaces/DeviceStatusResponse";

import axios, { AxiosResponse } from "axios";
import { setupCache } from "axios-cache-adapter";

const ENDPOINT = "https://api.switch-bot.com/v1.0";

export const fetchDeviceList = (
  token: string,
  cacheSec = 0
): Promise<IDeviceListResponse> => {
  const cache = setupCache({ maxAge: cacheSec });

  return axios.get(`${ENDPOINT}/devices`, {
    headers: {
      Authorization: token,
      "Content-Type": "application/json; charset=utf-8",
    },
    adapter: cache.adapter,
  });
};

export const fetchDeviceStatus = <T = IDeviceStatusResponse>(
  token: string,
  device: Device,
  cacheSec = 0
): Promise<T> => {
  const cache = setupCache({ maxAge: cacheSec });

  return axios.get<any, T>(`${ENDPOINT}/devices/${device.deviceId}/status`, {
    headers: {
      Authorization: token,
      "Content-Type": "application/json; charset=utf-8",
    },
    adapter: cache.adapter,
  });
};
