import { IBase } from "./Base";

export interface IMeterValueType {
  temperature: number;
  humidity: number;
}

export class Meter implements IBase {
  readonly temperature: number;
  readonly humidity: number;

  constructor(init: Partial<IMeterValueType>) {
    Object.assign(this, init);
  }

  getJson(): IMeterValueType {
    return {
      temperature: this.temperature,
      humidity: this.humidity,
    };
  }
}

export const createMeter = (init?: Partial<Meter>): Meter => {
  return new Meter(init);
};
