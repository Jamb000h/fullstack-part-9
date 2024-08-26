import express from "express";
import { calculateBmi } from "./bmiCalculator";
import { calculateExercises } from "./exerciseCalculator";
const app = express();

app.use(express.json());

app.get("/hello", (_req, res) => {
  res.send("Hello Full Stack");
});

app.get("/bmi", (req, res) => {
  const { height, weight } = req.query;
  if (!height) {
    return res.status(400).send("Height missing!");
  }

  if (!weight) {
    return res.status(400).send("Weight missing!");
  }
  if (isNaN(Number(height))) {
    return res
      .status(400)
      .send("Height should be a number representing centimeters!");
  }
  if (isNaN(Number(weight))) {
    return res
      .status(400)
      .send("Weight should be a number representing kilograms!");
  }

  return res.send({
    height,
    weight,
    bmi: calculateBmi({ height: Number(height), weight: Number(weight) }),
  });
});

app.post("/exercises", (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const {
    daily_exercises,
    target,
  }: { daily_exercises: number[]; target: number } = req.body;

  if (!daily_exercises || !daily_exercises.length) {
    return res.status(400).send("Daily exercises cannot be empty!");
  }

  const numberExercises = daily_exercises.map(Number);

  if (numberExercises.some(isNaN)) {
    return res.status(400).send("Daily exercises have to be numbers!");
  }

  if (isNaN(Number(target))) {
    return res.status(400).send("Target has to be a number!");
  }

  return res.send(calculateExercises([target].concat(numberExercises)));
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
