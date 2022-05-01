import { createDevice } from "#/domain/Device";

describe("Device", () => {
  test("Deviceが生成されるか", () => {
    const params = {
      deviceId: "",
      deviceName: "",
      deviceType: "",
      enableCloudService: true,
      hubDeviceId: "",
    };

    const result = createDevice(params);
    expect(params).toEqual(result.getJson());
  });
});
