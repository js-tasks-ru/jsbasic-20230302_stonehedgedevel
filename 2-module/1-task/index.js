function sumSalary(salaries) {
  let totalSum = 0;

  Object.values(salaries).forEach((value) => {
    if (isFinite(value)) {
      totalSum += value;
    }
  });

  return totalSum;
}
