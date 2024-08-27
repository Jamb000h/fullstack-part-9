import { DiaryEntry } from "../types";
import { Entry } from "./Entry";

interface ContentProps {
  entries: DiaryEntry[];
}

export const Content = ({ entries }: ContentProps) => {
  return (
    <>
      {entries.map((entry) => (
        <Entry entry={entry} />
      ))}
    </>
  );
};
