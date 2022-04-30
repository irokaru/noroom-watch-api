import { Device, IDeviceValueType } from "./Device";

interface IMeterDeviceValueType extends IDeviceValueType {
  deviceType: "meter";
  temperature: number;
  humidity: number;
}

export class MeterDevice extends Device<IMeterDeviceValueType> {
  readonly temperature: number;
  readonly humidity: number;

  constructor(init: Partial<Device<IMeterDeviceValueType>>) {
    super(init);
    Object.assign(this, init);
  }

  getJson() {
    return {
      deviceId: this.deviceId,
      deviceName: this.deviceName,
      deviceType: this.deviceType,
      enableCloudService: this.enableCloudService,
      hubDeviceId: this.hubDeviceId,
      temperature: this.temperature,
      humidity: this.humidity,
    };
  }
}

export const createMeterDevice = (init?: Partial<MeterDevice>): MeterDevice => {
  return new MeterDevice(init);
};
