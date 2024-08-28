import patients from "../data/patients";
import { NonSensitivePatient, Patient } from "../types/index.js";

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

export const addPatient = (newPatient: Patient): NonSensitivePatient => {
  patients.push(newPatient);
  return newPatient;
};
