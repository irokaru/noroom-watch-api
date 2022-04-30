import { Device } from "#/domain/Device";
import { findDeviceList } from "#/infrastructure/Switchbot";

export const findOneDeviceByName = async (
  token: string,
  deviceName: string
): Promise<Device | undefined> => {
  try {
    const res = await findDeviceList(token, 1 * 60 * 60);

    if (res.data.message !== "success") return undefined;

    const deviceList = res.data.body.deviceList;

    const device = deviceList.filter((d) => d.deviceName === deviceName)[0];

    return device;
  } catch (_) {
    return undefined;
  }
};
