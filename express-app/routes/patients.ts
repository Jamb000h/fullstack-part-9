import express from "express";
import {
  getNonSensitivePatients,
  getSensitivePatient,
  addPatient,
} from "../services/patientService";
import { toNewPatient } from "../utils";
import { z } from "zod";

const router = express.Router();

router.get("/", (_req, res) => {
  res.send(getNonSensitivePatients());
});

router.get("/:id", (req, res) => {
  try {

    res.send(getSensitivePatient(req.params.id));
  } catch (e: unknown) {
    if (e instanceof Error) {
      res.status(404).send(e.message);
    }
  }
});

router.post("/", (req, res) => {
  try {
    const newPatient = toNewPatient(req.body);
    const patient = addPatient(newPatient);
    res.json(patient);
  } catch (error: unknown) {
    if (error instanceof z.ZodError) {
      res.status(400).send({ error: error.issues });
    } else {
      res.status(400).send({ error: "unknown error" });
    }
  }
});

export default router;
