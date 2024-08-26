type BMIResult = "Underweight" | "Normal range" | "Overweight" | "Obese"

const calculateBmi = (height: number, mass: number) : BMIResult => {
    const bmi = mass / Math.pow(height / 100, 2)

    if (bmi < 18.5) {
        return "Underweight"
    }

    if (bmi < 23) {
        return "Normal range"
    }

    if (bmi < 27.5) {
        return "Overweight"
    }

    return "Obese"
}

console.log(calculateBmi(180, 74))