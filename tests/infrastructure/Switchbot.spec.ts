import dotenv from "dotenv";

import { fetchDeviceList, fetchDeviceStatus } from "#/infrastructure/Switchbot";
import { createDevice } from "#/domain/Device";

dotenv.config();

describe("fetchDeviceList", () => {
  test("デバイス一覧が取得できるか", async () => {
    const token = process.env.SWITCHBOT_TOKEN;
    const result = await fetchDeviceList(token);
    expect(result.data.message).toEqual("success");
  });

  test("トークンが不正だった場合は401が返るか", async () => {
    try {
      await fetchDeviceList("");
    } catch (e) {
      expect(e.response.status).toEqual(401);
    }
  });
});

describe("fetchDeviceStatus", () => {
  test("デバイスの情報が取得できるか", async () => {
    const devicesResponse = await fetchDeviceList(process.env.SWITCHBOT_TOKEN);
    const device = devicesResponse.data.body.deviceList[1];

    const result = await fetchDeviceStatus(process.env.SWITCHBOT_TOKEN, device);
    expect(result.data.message).toEqual("success");
  });

  test("トークンが不正だった場合は401が返るか", async () => {
    try {
      await fetchDeviceStatus("", createDevice({}));
    } catch (e) {
      expect(e.response.status).toEqual(401);
    }
  });
});
