import dotenv from "dotenv";

import { findDeviceList, findDeviceStatus } from "#/infrastructure/Switchbot";
import { createDevice } from "#/domain/Device";

dotenv.config();

describe("findDeviceList", () => {
  test("デバイス一覧が取得できるか", async () => {
    const suites: string[] = [process.env.SWITCHBOT_TOKEN];

    for (const suite of suites) {
      const result = await findDeviceList(suite);
      expect(result.data.message).toEqual("success");
    }
  });

  test("トークンが不正だった場合は401が返るか", async () => {
    try {
      await findDeviceList("");
    } catch (e) {
      expect(e.response.status).toEqual(401);
    }
  });
});

describe("findDeviceStatus", () => {
  test("デバイスの情報が取得できるか", async () => {
    const devicesResponse = await findDeviceList(process.env.SWITCHBOT_TOKEN);
    const device = devicesResponse.data.body.deviceList[1];

    const result = await findDeviceStatus(process.env.SWITCHBOT_TOKEN, device);
    expect(result.data.message).toEqual("success");
  });

  test("トークンが不正だった場合は401が返るか", async () => {
    try {
      await findDeviceStatus("", createDevice({}));
    } catch (e) {
      expect(e.response.status).toEqual(401);
    }
  });
});
