import { createMeterDevice } from "#/domain/MeterDevice";

describe("createMeterDevice", () => {
  test("MeterDeviceが生成されるか", () => {
    const suites = [
      {
        temperature: 10,
        humidity: 50,
      },
    ];

    for (const suite of suites) {
      const result = createMeterDevice(suite);
      expect(suite).toEqual(result.getJson());
    }
  });
});
