import { IBase } from "./Base";

type DeviceValueType = {
  deviceId: string;
  deviceName: string;
  deviceType: string;
  enableCloudService: boolean;
  hubDeviceId: string;
};

export class Device implements IBase {
  readonly deviceId: string;
  readonly deviceName: string;
  readonly deviceType: string;
  readonly enableCloudService: boolean;
  readonly hubDeviceId: string;

  constructor(init: Partial<DeviceValueType>) {
    Object.assign(this, init);
  }

  getJson(): DeviceValueType {
    return {
      deviceId: this.deviceId,
      deviceName: this.deviceName,
      deviceType: this.deviceType,
      enableCloudService: this.enableCloudService,
      hubDeviceId: this.hubDeviceId,
    };
  }
}

export const createDevice = (init?: Partial<Device>): IBase => {
  return new Device(init);
};
