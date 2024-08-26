import diagnoses from "../data/diagnoses";
import { Diagnosis } from "../types/index.js";

export const getDiagnoses = (): Diagnosis[] => {
  return diagnoses;
};
