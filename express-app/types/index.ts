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
  gender: string;
  occupation: string;
};

export type NonSensitivePatient = Pick<Patient, "id" | "name" | "dateOfBirth" | "gender" | "occupation">;

export type NewPatient = Omit<Patient, "id">;
