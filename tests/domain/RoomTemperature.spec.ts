import { createRoomTemperature } from "#/domain/RoomTemperature";

describe("RoomTemperature.ts", () => {
  test("RoomTemperatureが生成されるか", () => {
    const suites = [
      {
        temperature: 10,
        humidity: 50,
      },
    ];

    for (const suite of suites) {
      const result = createRoomTemperature(suite);
      expect(suite).toEqual(result.getJson());
    }
  });
});
