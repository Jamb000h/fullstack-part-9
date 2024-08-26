import express from "express";
import { getNonSensitivePatients, addPatient } from "../services/patientService";
import { NewPatient } from "../types";

const router = express.Router();

router.get("/", (_req, res) => {
  res.send(getNonSensitivePatients());
});

router.post("/", (req, res) => {
  const patient = addPatient(req.body as NewPatient);
  res.json(patient);
});

export default router;
