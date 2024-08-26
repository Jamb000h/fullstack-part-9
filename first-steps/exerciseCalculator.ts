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
        return "you didn't meet the target"
    }

    if (rating < target && Math.round(rating) === target) {
        return 'not too bad but could be better'
    }

    return 'you crushed the target'
}

const calculateExercises = (exerciseHours: number[]) : ExerciseCalculationResult => {
    const periodLength = exerciseHours.length
    const trainingDays = exerciseHours.filter(x => x > 0).length
    const average = exerciseHours.reduce((prev, cur) => prev + cur, 0) / exerciseHours.length
    const target = 2
    const rating = Math.round(average)
    const ratingDescription = getRatingDescription(target, average)
    const success = average >= target

    return {
        periodLength,
        trainingDays,
        success,
        rating,
        ratingDescription,
        target,
        average
    }
};

console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1]))
