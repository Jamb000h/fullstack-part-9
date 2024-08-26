import express from "express";
import { calculateBmi } from "./bmiCalculator";
const app = express();

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

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
