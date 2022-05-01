import { fetchDeviceList, fetchDeviceStatus } from "#/infrastructure/Switchbot";
import {
  findOneDeviceByName,
  getMeterDeviceStatus,
} from "#/application/services/DeviceService";
import { createDevice, Device } from "#/domain/Device";
import { TMeterDeviceStatusResponse } from "#/interfaces/DeviceStatusResponse";

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

const craeteResultDevicestatus = <T>(params: T) => {
  return Promise.resolve({
    data: params,
    status: 200,
    statusText: "",
    headers: {},
    config: {},
  });
};

const createDummyDevice = (deviceName: string, deviceType = "dummy") =>
  createDevice({
    deviceId: "0",
    deviceName,
    deviceType,
  });

describe("findOneDeviceByName", () => {
  test("デバイスを見つけられるか", async () => {
    const suites: [
      [number, string[], "success" | "error"],
      string,
      Device | undefined
    ][] = [
      [[200, [], "success"], "aaa", undefined],
      [[200, ["hogehoge"], "error"], "aaa", undefined],
      [[200, ["hogehoge"], "error"], "hogehoge", undefined],
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
      (fetchDeviceList as jest.Mock).mockImplementation(() =>
        createResultDeviceList(...mockParams)
      );

      const result = await findOneDeviceByName("dummy", deviceName);
      expect(result).toEqual(exp);
    }
  });

  test("エラー時undefinedになるか", async () => {
    (fetchDeviceList as jest.Mock).mockImplementation(() =>
      Promise.reject({ error: "dummy" })
    );
    const result = await findOneDeviceByName("dummy", "catch test");
    expect(result).toBeUndefined();
  });
});

describe("getMeterDeviceStatus", () => {
  test("デバイスの状態が取得できるか", async () => {
    const dummyMeter = createDummyDevice("dummy meter", "Meter");
    const returnValue = craeteResultDevicestatus<TMeterDeviceStatusResponse>({
      statusCode: 200,
      body: {
        ...dummyMeter.getJson(),
        humidity: 50,
        temperature: 25,
      },
      message: "success",
    });

    (fetchDeviceStatus as jest.Mock).mockImplementation(() => returnValue);

    const result = await getMeterDeviceStatus("dummy", dummyMeter);
    expect(result).toEqual(await returnValue);
  });

  test("Meterではないデバイスのときはnullが返るか", async () => {
    const dummyNotMeter = createDummyDevice("dummy not meter", "dummy");
    const returnValue = craeteResultDevicestatus<TMeterDeviceStatusResponse>({
      statusCode: 200,
      body: {
        ...dummyNotMeter.getJson(),
        humidity: 50,
        temperature: 25,
      },
      message: "success",
    });

    (fetchDeviceStatus as jest.Mock).mockImplementation(() => returnValue);

    const result = await getMeterDeviceStatus("dummy", dummyNotMeter);
    expect(result).toBeNull();
  });
});
