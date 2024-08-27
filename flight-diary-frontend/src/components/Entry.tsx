import { DiaryEntry } from "../types";

interface EntryProps {
  entry: DiaryEntry;
}

export const Entry = ({ entry }: EntryProps) => {
  return (
    <div>
      <h2>{entry.date}</h2>
      <p>visibility: {entry.visibility}</p>
      <p>weather: {entry.weather}</p>
      {entry.comment && <p>comment: {entry.comment}</p>}
    </div>
  );
};
