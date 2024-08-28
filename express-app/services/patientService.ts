import { v1 as uuid } from "uuid";

import patients from "../data/patients";
import { NonSensitivePatient, NewPatient, Patient } from "../types/index.js";

export const getSensitivePatient = (id: string): Patient => {
  const patient = patients.find((patient) => patient.id === id);
  if (patient) {
    return patient;
  }

  throw Error("Patient not found for id " + id);
};

export const getNonSensitivePatients = (): NonSensitivePatient[] => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => {
    return { id, name, dateOfBirth, gender, occupation };
  });
};

export const addPatient = (newPatient: NewPatient): NonSensitivePatient => {
  const id: string = uuid();
  const patientToAdd = { ...newPatient, id, entries: [] };
  patients.push(patientToAdd);
  return patientToAdd;
};
