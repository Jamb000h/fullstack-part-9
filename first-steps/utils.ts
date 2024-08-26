export const getNumberArgs = (maxArgs?: number, minArgs?: number) => {
  const args = process.argv.slice(2);
  if (maxArgs && args.length > maxArgs) {
    throw new Error("Too many arguments given. Limit: " + maxArgs);
  }

  if (minArgs && args.length < minArgs) {
    throw new Error("Too few arguments given. Minimum needed: " + minArgs);
  }

  return args.map(Number);
};
