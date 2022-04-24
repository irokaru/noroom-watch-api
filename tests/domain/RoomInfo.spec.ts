import { createRoomInfo } from "#/domain/RoomInfo";

describe("RoomInfo.ts", () => {
  test("RoomInfoが生成されるか", () => {
    const suites = [
      {
        temperature: 10,
        humidity: 50,
      },
    ];

    for (const suite of suites) {
      const result = createRoomInfo(suite);
      expect(suite).toEqual(result.getJson());
    }
  });
});
