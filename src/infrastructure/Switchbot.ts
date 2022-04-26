import { IDeviceListResponse } from "#/interfaces/DeviceListResponse";
import axios from "axios";

const ENDPOINT = "https://api.switch-bot.com/v1.0";

export const findDeviceList = (token: string): Promise<IDeviceListResponse> => {
  return axios.get(`${ENDPOINT}/devices`, {
    headers: {
      Authorization: token,
      "Content-Type": "application/json; charset=utf-8",
    },
  });
};
