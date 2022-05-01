import { createDevice } from "#/domain/Device";

describe("Device", () => {
  test("Deviceが生成されるか", () => {
    const suites = [
      {
        deviceId: "",
        deviceName: "",
        deviceType: "",
        enableCloudService: true,
        hubDeviceId: "",
      },
    ];

    for (const suite of suites) {
      const result = createDevice(suite);
      expect(suite).toEqual(result.getJson());
    }
  });
});
