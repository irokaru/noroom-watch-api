import { IBase } from "./Base";

type RoomTemperatureValueType = {
  temperature: number;
  humidity: number;
};

export class RoomTemperature implements IBase {
  readonly temperature: number;
  readonly humidity: number;

  constructor(init: Partial<RoomTemperatureValueType>) {
    Object.assign(this, init);
  }

  getJson() {
    return {
      temperature: this.temperature,
      humidity: this.humidity,
    };
  }
}

export const createRoomTemperature = (
  init?: Partial<RoomTemperature>
): IBase => {
  return new RoomTemperature(init);
};
