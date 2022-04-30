import { IDeviceListResponse } from "#/interfaces/DeviceListResponse";
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
