import { CoursePart } from "../data/courseParts";
import { assertNever } from "../utils";

interface PartProps {
  coursePart: CoursePart;
}

export const Part = ({ coursePart }: PartProps) => {
  switch (coursePart.kind) {
    case "basic":
      return (
        <div>
          <p>
            <strong>
              {coursePart.name} {coursePart.exerciseCount}
            </strong>
          </p>
          <p>{coursePart.description}</p>
        </div>
      );
    case "background":
      return (
        <div>
          <p>
            <strong>
              {coursePart.name} {coursePart.exerciseCount}
            </strong>
          </p>
          <p>{coursePart.description}</p>
          <p>
            Background material:{" "}
            <a href={coursePart.backgroundMaterial}>
              {coursePart.backgroundMaterial}
            </a>
          </p>
        </div>
      );
    case "group":
      return (
        <div>
          <p>
            <strong>
              {coursePart.name} {coursePart.exerciseCount}
            </strong>
          </p>
          <p>Group projects: {coursePart.groupProjectCount}</p>
        </div>
      );
      case "special":
        return (
          <div>
            <p>
              <strong>
                {coursePart.name} {coursePart.exerciseCount}
              </strong>
            </p>
            <p>{coursePart.description}</p>
            <p>Required skills: {coursePart.requirements.join(", ")}</p>
          </div>
        );
    default:
      assertNever(coursePart);
  }
};
