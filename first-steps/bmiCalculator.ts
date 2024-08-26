import { getNumberArgs } from "./utils";

type BMIResult = "Underweight" | "Normal range" | "Overweight" | "Obese";
type BMIArgs = {
  height: number;
  weight: number;
};

export const calculateBmi = ({ height, weight }: BMIArgs): BMIResult => {
  const bmi = weight / Math.pow(height / 100, 2);

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

if (require.main === module) {
  try {
    const args = getNumberArgs(undefined, 2);
    console.log(calculateBmi({ height: args[0], weight: args[1] }));
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.error(e.message);
    }
  }
}
