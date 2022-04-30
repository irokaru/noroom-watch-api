import { Device } from "#/domain/Device";
import { IDeviceListResponse } from "#/interfaces/DeviceListResponse";
import { IDeviceStatusResponse } from "#/interfaces/DeviceStatusResponse";

import axios from "axios";
import { setupCache } from "axios-cache-adapter";

const ENDPOINT = "https://api.switch-bot.com/v1.0";

export const findDeviceList = (
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

export const findDeviceStatus = (
  token: string,
  device: Device,
  cacheSec = 0
): Promise<IDeviceStatusResponse> => {
  const cache = setupCache({ maxAge: cacheSec });

  return axios.get(`${ENDPOINT}/devices/${device.deviceId}/status`, {
    headers: {
      Authorization: token,
      "Content-Type": "application/json; charset=utf-8",
    },
    adapter: cache.adapter,
  });
};
