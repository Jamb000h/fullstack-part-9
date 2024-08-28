import { Gender } from "../enums";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface Entry {}

export type Diagnosis = {
  code: string;
  name: string;
  latin?: string;
};

export type Patient = {
  id: string;
  name: string;
  dateOfBirth: string;
  ssn: string;
  gender: Gender;
  occupation: string;
  entries: Entry[];
};

export type NonSensitivePatient = Pick<
  Patient,
  "id" | "name" | "dateOfBirth" | "gender" | "occupation"
>;

export type NewPatient = Omit<Patient, "id" | "entries">;
