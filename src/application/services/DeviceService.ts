import { Device } from "#/domain/Device";
import { createMeter, Meter } from "#/domain/Meter";
import { fetchDeviceList, fetchDeviceStatus } from "#/infrastructure/Switchbot";
import {
  IDeviceStatusResponse,
  TMeterDeviceStatusResponse,
} from "#/interfaces/DeviceStatusResponse";

export const findOneDeviceByName = async (
  token: string,
  deviceName: string
): Promise<Device | undefined> => {
  try {
    const res = await fetchDeviceList(token, 1 * 60 * 60 * 1000);

    if (res.data.message !== "success") return undefined;

    const deviceList = res.data.body.deviceList;

    const device = deviceList.filter((d) => d.deviceName === deviceName)[0];

    return device;
  } catch (_) {
    return undefined;
  }
};

export const getMeterDeviceStatus = async (
  token: string,
  device: Device
): Promise<Meter | null> => {
  if (device.deviceType !== "Meter") return null;

  try {
    const status = await fetchDeviceStatus<
      IDeviceStatusResponse<TMeterDeviceStatusResponse>
    >(token, device);

    return createMeter(status.data.body);
  } catch (_) {
    return null;
  }
};
