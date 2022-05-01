import { createMeter } from "#/domain/Meter";

describe("Meter", () => {
  test("Meterが生成されるか", () => {
    const suites = [
      {
        temperature: 25,
        humidity: 50,
      },
    ];

    for (const suite of suites) {
      const result = createMeter(suite);
      expect(suite).toEqual(result.getJson());
    }
  });
});
