import bodyParser from "body-parser";
import cors from "cors";
import express from "express";

import { configSwitchbot } from "./services/config";
import {
  findOneDeviceByName,
  getMeterDeviceStatus,
} from "./services/DeviceService";

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get("/api/room", async (req, res) => {
  const meter = await findOneDeviceByName(
    configSwitchbot.token,
    configSwitchbot.meterDeviceName
  );
  const meterStatus = await getMeterDeviceStatus(configSwitchbot.token, meter);

  if (!meterStatus) {
    res.send({ status: "error" });
    return;
  }

  res.send({
    status: "success",
    temperature: meterStatus.temperature,
    humidity: meterStatus.humidity,
  });
});

export default app;
