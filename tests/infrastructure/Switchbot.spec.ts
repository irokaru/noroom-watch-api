import dotenv from "dotenv";

import { findDeviceList } from "#/infrastructure/Switchbot";

dotenv.config();

describe("Switchbot", () => {
  test("findDeviceListでデバイス一覧が取得できるか", async () => {
    const suites: string[] = [process.env.SWITCHBOT_TOKEN];

    for (const suite of suites) {
      const result = await findDeviceList(suite);
      expect(result.data.message).toEqual("success");
    }
  });

  test("findDeviceListでトークンが不正だった場合は401が返るか", async () => {
    try {
      await findDeviceList("");
    } catch (e) {
      expect(e.response.status).toEqual(401);
    }
  });
});
