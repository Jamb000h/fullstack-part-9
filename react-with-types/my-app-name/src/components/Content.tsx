import { CoursePart } from "../App";

interface ContentProps {
  courseParts: CoursePart[];
}

export const Content = ({ courseParts }: ContentProps) => {
  return (
    <>
      {courseParts.map((coursePart) => (
        <p>
          {coursePart.name} {coursePart.exerciseCount}
        </p>
      ))}
    </>
  );
};
