import { CoursePart } from "../data/courseParts";
import { Part } from "./Part";

interface ContentProps {
  courseParts: CoursePart[];
}

export const Content = ({ courseParts }: ContentProps) => {
  return (
    <>
      {courseParts.map((coursePart) => (
        <Part coursePart={coursePart} />
      ))}
    </>
  );
};
