export const isStringArray = (value: unknown): value is string[] => {
  return (
    Array.isArray(value) &&
    value.every((keyword) => typeof keyword === "string")
  );
};

export const moveToFirst = <T>(arr: T[], target: T): T[] => {
  const index = arr.indexOf(target);

  if (index <= 0) return [...arr];

  const newArr = [...arr];
  newArr.splice(index, 1);
  newArr.unshift(target);

  return newArr;
};
