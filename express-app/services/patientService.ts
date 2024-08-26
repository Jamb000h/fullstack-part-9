import { v1 as uuid } from "uuid";

import patients from "../data/patients";
import { NonSensitivePatient, NewPatient } from "../types/index.js";

export const getNonSensitivePatients = (): NonSensitivePatient[] => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => {
    return { id, name, dateOfBirth, gender, occupation };
  });
};

export const addPatient = (newPatient: NewPatient): NonSensitivePatient => {
  const id: string = uuid();
  const patientToAdd = { ...newPatient, id };
  patients.push(patientToAdd);
  return patientToAdd;
};
