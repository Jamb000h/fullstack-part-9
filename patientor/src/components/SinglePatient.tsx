import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Patient } from "../types";

import patientService from "../services/patients";

const SinglePatient = () => {
  const [patient, setPatient] = useState<Patient>();
  const { id } = useParams();

  useEffect(() => {
    const fetchPatient = async () => {
      console.log("MORO");
      if (id) {
        const newPatient = await patientService.get(id);
        setPatient(newPatient);
      }
    };
    void fetchPatient();
  }, [id]);

  if (!patient) {
    return null;
  }

  return (
    <div className="patient">
      <h1>{patient.name}</h1>
      <p>Gender: {patient.gender}</p>
      <p>SSN: {patient.ssn}</p>
      <p>Occupation: {patient.occupation}</p>
      {patient.entries.length > 0 && (
        <>
          <h2>Entries</h2>
          {patient.entries.map((entry, i) => {
            return (
              <div className="entry" key={i}>
                {entry.date} <i>{entry.description}</i>
                <ul>
                  {entry.diagnosisCodes?.map((diagnosisCode) => (
                    <li key={diagnosisCode}>{diagnosisCode}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default SinglePatient;
