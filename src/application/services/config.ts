import dotenv from "dotenv";

dotenv.config();

export const configSwitchbot = {
  token: process.env.SWITCHBOT_TOKEN,
  meterDeviceName: process.env.SWITCHBOT_METER_DEVICE_NAME,
};
