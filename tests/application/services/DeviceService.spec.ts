import { findDeviceList } from "#/infrastructure/Switchbot";
import { findOneDeviceByName } from "#/application/services/DeviceService";
import { createDevice, Device } from "#/domain/Device";

jest.mock("#/infrastructure/Switchbot");

const createResultDeviceList = (
  status: number,
  deviceNames: string[],
  message: "success" | "error"
) => {
  const deviceList = deviceNames.map((deviceName) =>
    createDummyDevice(deviceName)
  );

  return Promise.resolve({
    status,
    statusText: "",
    config: {},
    data: {
      statusCode: status,
      body: {
        deviceList,
        infraredRemoteList: [],
      },
      message,
    },
  });
};

const createDummyDevice = (deviceName: string) =>
  createDevice({
    deviceId: "0",
    deviceName,
    deviceType: "dummy",
  });

describe("findOneDeviceByName", () => {
  test("デバイスを見つけられるか", async () => {
    const suites: [
      [number, string[], "success" | "error"],
      string,
      Device | undefined
    ][] = [
      [[200, [], "success"], "aaa", undefined],
      [
        [200, ["hogehoge"], "success"],
        "hogehoge",
        createDummyDevice("hogehoge"),
      ],
      [
        [200, ["hogehoge", "fugafuga"], "success"],
        "fugafuga",
        createDummyDevice("fugafuga"),
      ],
    ];

    for (const [mockParams, deviceName, exp] of suites) {
      (findDeviceList as jest.Mock).mockImplementation(() =>
        createResultDeviceList(...mockParams)
      );

      const result = await findOneDeviceByName("dummy", deviceName);
      expect(result).toEqual(exp);
    }
  });
});
