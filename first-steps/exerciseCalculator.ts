import { getNumberArgs } from "./utils";

interface ExerciseCalculationResult {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

const getRatingDescription = (target: number, rating: number) => {
  if (rating < target && Math.round(rating) < target) {
    return "you didn't meet the target";
  }

  if (rating < target && Math.round(rating) === target) {
    return "not too bad but could be better";
  }

  return "you crushed the target";
};

export const calculateExercises = (
  input: number[]
): ExerciseCalculationResult => {
  const target = input[0];
  const exerciseHours = input.slice(1);
  const periodLength = exerciseHours.length;
  const trainingDays = exerciseHours.filter((x) => x > 0).length;
  const average =
    exerciseHours.reduce((prev, cur) => prev + cur, 0) / exerciseHours.length;
  const rating = Math.round(average);
  const ratingDescription = getRatingDescription(target, average);
  const success = average >= target;

  return {
    periodLength,
    trainingDays,
    success,
    rating,
    ratingDescription,
    target,
    average,
  };
};

if (require.main === module) {
  try {
    const args = getNumberArgs();
    console.log(calculateExercises(args));
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.error(e.message);
    }
  }
}
