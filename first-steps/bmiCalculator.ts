import { getNumberArgs } from "./utils";

type BMIResult = "Underweight" | "Normal range" | "Overweight" | "Obese";
type BMIArgs = {
  height: number;
  mass: number;
};

const calculateBmi = ({ height, mass }: BMIArgs): BMIResult => {
  const bmi = mass / Math.pow(height / 100, 2);

  if (bmi < 18.5) {
    return "Underweight";
  }

  if (bmi < 23) {
    return "Normal range";
  }

  if (bmi < 27.5) {
    return "Overweight";
  }

  return "Obese";
};

try {
  const args = getNumberArgs(undefined, 2);
  console.log(calculateBmi({ height: args[0], mass: args[1] }));
} catch (e: unknown) {
  if (e instanceof Error) {
    console.error(e.message);
  }
}
