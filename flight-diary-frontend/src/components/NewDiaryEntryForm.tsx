import { useState } from "react";
import { DiaryEntry, Visibility, Weather } from "../types";
import { createNewEntry } from "../services/diaryService";
import axios from "axios";

interface NewDiaryEntryFormProps {
  addEntry: (entry: DiaryEntry) => void;
}

export const NewDiaryEntryForm = ({ addEntry }: NewDiaryEntryFormProps) => {
  const [date, setDate] = useState<string>("");
  const [visibility, setVisibility] = useState<Visibility>();
  const [weather, setWeather] = useState<Weather>();
  const [comment, setComment] = useState<string>("");
  const [error, setError] = useState<string>("");

  const createEntry = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!date || !visibility || !weather) {
      return;
    }
    const newEntry: DiaryEntry = {
      date,
      visibility,
      weather,
      comment,
    };

    try {
      const data = await createNewEntry(newEntry);
      addEntry(data);
      setDate("");
      setVisibility(undefined);
      setWeather(undefined);
      setComment("");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError(error.response?.data);
      } else {
        console.error(error);
      }
    }
  };

  return (
    <div>
      <h2>Add a new entry</h2>
      {error && <p>{error}</p>}
      <form onSubmit={createEntry}>
        <label>
          <strong>Date: </strong>
          <input
            type="date"
            value={date}
            onChange={(event) => setDate(event.target.value)}
          />
          <br />
        </label>
        <strong>Visibility: </strong>
        {Object.values(Visibility).map((v) => (
          <label style={{ marginRight: "2rem" }} key={v}>
            {v}
            <input
              type="radio"
              value={v}
              checked={visibility === v}
              name="visibility"
              onChange={() => setVisibility(v)}
            />
          </label>
        ))}
        <br />
        <strong>Weather: </strong>
        {Object.values(Weather).map((w) => (
          <label style={{ marginRight: "2rem" }} key={w}>
            {w}
            <input
              type="radio"
              value={w}
              checked={weather === w}
              name="weather"
              onChange={() => setWeather(w)}
            />
          </label>
        ))}
        <br />
        <label>
          <strong>Comment: </strong>
          <input
            value={comment}
            onChange={(event) => setComment(event.target.value)}
          />
        </label>
        <br />
        <button type="submit">add</button>
      </form>
    </div>
  );
};
