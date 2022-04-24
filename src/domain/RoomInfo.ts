import { IBase } from "./Base";

type RoomInfoValueType = {
  temperature: number;
  humidity: number;
};

export class RoomInfo implements IBase {
  readonly temperature: number;
  readonly humidity: number;

  constructor(init: Partial<RoomInfoValueType>) {
    Object.assign(this, init);
  }

  getJson() {
    return {
      temperature: this.temperature,
      humidity: this.humidity,
    };
  }
}

export const createRoomInfo = (init?: Partial<RoomInfo>): IBase => {
  return new RoomInfo(init);
};
