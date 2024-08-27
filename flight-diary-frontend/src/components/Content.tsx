import { DiaryEntry } from "../types";
import { Entry } from "./Entry";

interface ContentProps {
  entries: DiaryEntry[];
}

export const Content = ({ entries }: ContentProps) => {
  return (
    <>
      {entries.map((entry, i) => (
        <Entry entry={entry} key={i}/>
      ))}
    </>
  );
};
