import { z } from "zod";
import { Gender } from "../enums";
import { Patient } from "../types";
import { v1 as uuid } from "uuid";

export const toNewPatient = (object: unknown): Patient => {
  const newPatientSchema = z.object({
    name: z.string(),
    gender: z.nativeEnum(Gender),
    dateOfBirth: z.string().date(),
    ssn: z.string(),
    occupation: z.string(),
  });

  const newPatient = newPatientSchema.parse(object);

  const newEntry: Patient = {
    ...newPatient,
    id: uuid(),
    entries: []
  };

  return newEntry;
};
