import { Device, IDeviceValueType } from "./Device";

interface IRoomTemperatureValueType extends IDeviceValueType {
  temperature: number;
  humidity: number;
}

export class RoomTemperature extends Device {
  readonly temperature: number;
  readonly humidity: number;

  constructor(init: Partial<IRoomTemperatureValueType>) {
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

export const createRoomTemperature = (
  init?: Partial<RoomTemperature>
): RoomTemperature => {
  return new RoomTemperature(init);
};
